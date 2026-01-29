'use client'

import { useEffect } from "react";
import lozad from "lozad";
import { cn } from "@/lib/utils";

export default function ImageCustoms({
  src = '../../assets/img/1.jpg',
  className,
  alt = '',
}: {
  src?: string;
  className?: string;
  alt?: string;
}) {
  useEffect(() => {
    const observer = lozad('.lozad');
    observer.observe();
  }, []);

  return (
    <img
      src="../../assets/img/1.jpg"
      data-src={src}                  
      alt={alt}
      className={cn("lozad", className)}
    />
  );
}
