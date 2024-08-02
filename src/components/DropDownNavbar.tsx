import * as React from "react"
import Link from "next/link" 
import { cn } from "@/lib/utils"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    
  } from "@/components/ui/navigation-menu"

  const rankingComponents: { title: string; href: string;}[] = [
    {
      title: "Light Novel Ranking",
      href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Comic Ranking",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Fan-Fic Ranking",
        href: "/docs/primitives/alert-dialog",
      },
  ]

  const browseComponents: { title: string; href: string;}[] = [
    {
      title: "Action",
      href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Comedy",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Fantasy",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Romance",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Magic",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "History",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Sci-fi",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Sports",
        href: "/docs/primitives/alert-dialog",
      },
  ]


export  function DropDownRanking() {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
            <NavigationMenuContent>
               
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {browseComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                </ListItem>
              ))}
                </ul>
                
            </NavigationMenuContent>
            </NavigationMenuItem>


            <NavigationMenuItem>
            <NavigationMenuTrigger>Ranking</NavigationMenuTrigger>
            <NavigationMenuContent>
               
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {rankingComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                </ListItem>
              ))}
                </ul>
                
            </NavigationMenuContent>
            </NavigationMenuItem>

            
          

        </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
