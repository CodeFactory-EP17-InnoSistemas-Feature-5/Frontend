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
import React, { useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GET_PROYECTOS } from "@/lib/ApolloQueries";
import { useQuery } from "@apollo/client";
import Loading from "@/app/loading";

interface ComboboxProjectsProps {
  selectedProject: string;
  setSelectedProject: (project: string) => void;
}

interface Proyecto {
  id: string;
  nombreproyecto: string;
}

interface ProyectoList {
  findAllProyecto: Proyecto[];
}

export default function ComboboxProjects({
  selectedProject,
  setSelectedProject,
}: ComboboxProjectsProps) {
  const [open, setOpen] = React.useState(false);
  const { loading, error, data } = useQuery<ProyectoList>(GET_PROYECTOS);
  useEffect(() => {
    if (!selectedProject && data && data.findAllProyecto.length > 0) {
      const proyectosData = data.findAllProyecto;
      setSelectedProject(proyectosData[0].nombreproyecto);
    }
  }, [data]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return (
      <div className="py-4 text-red-500">
        Error cargando los datos: {error.message}
      </div>
    );
  }
  const proyectosData = data?.findAllProyecto || [];

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
            ? proyectosData.find((p) => p.nombreproyecto === selectedProject)
                ?.nombreproyecto
            : proyectosData[0].nombreproyecto}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar proyecto..."></CommandInput>
          <CommandList>
            <CommandEmpty>No se encontro proyecto con el nombre</CommandEmpty>
            <CommandGroup>
              {proyectosData.map((project) => (
                <CommandItem
                  key={project.id}
                  value={project.nombreproyecto}
                  onSelect={(currentProject) => {
                    setSelectedProject(currentProject);
                    setOpen(false);
                  }}
                >
                  {project.nombreproyecto}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedProject === project.nombreproyecto
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
