"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, name: "Proyecto 1" },
  { id: 2, name: "Proyecto 2" },
  { id: 3, name: "Proyecto 3" },
];

export function ComboboxProjects() {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[220px] justify-between"
        >
          {selectedProject
            ? projects.find((p) => p.name === selectedProject)?.name
            : "Seleccionar Proyecto..."}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar proyecto..."></CommandInput>
          <CommandList>
            <CommandEmpty>No se encontro proyecto con el nombre</CommandEmpty>
            <CommandGroup>
              {projects.map((project) => (
                <CommandItem
                  key={project.id}
                  value={project.name}
                  onSelect={(currentProject) => {
                    setSelectedProject(
                      currentProject === selectedProject ? "" : currentProject,
                    );
                    setOpen(false);
                  }}
                >
                  {project.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedProject === project.name
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
