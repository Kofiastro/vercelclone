"use client"
import * as React from "react"
import Link from "next/link"
import { SiNextdotjs,SiTurborepo } from "react-icons/si";
import {StarsIcon,SidebarBottomIcon,ChipIcon,Globe02Icon,Shield02Icon,ChartIcon,CubeIcon,House02Icon,ChartLineData01Icon,CommandIcon,SidebarTopIcon,Wrench01Icon,Triangle01Icon,PuzzleIcon,BookOpen01Icon,SidebarLeft01Icon,Wrench02Icon,SmileIcon,BookOpen02Icon,Briefcase04Icon,GeometricShapes02Icon} from "hugeicons-react";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavVercel() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList >
        <NavigationMenuItem>
          {/* Menu 1 */}
          <NavigationMenuTrigger className="font-light">Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-3 m-3 gap-x-5 w-[700px] *:text-stone-400 *:text-sm  ">
              <div>
                <h1>DX platform</h1>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <SidebarBottomIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">Preview</h1>
                  <p className="text-xs">Helping teams ship 6x faster</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <StarsIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">AI</h1>
                  <p className="text-xs">Powering breakthroughs</p>
                  </li>
                </ul>
              </div>
              <div>
              <h1>Managed Infrastructure</h1>
              <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <ChipIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">Fluid Compute</h1>
                  <p className="text-xs">Helping teams ship 6x faster</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <Globe02Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">Rendering</h1>
                  <p className="text-xs">Fast,scalable,and reliable</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <ChartIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">Observability</h1>
                  <p className="text-xs">Trace with everystep</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <Shield02Icon className=" size-5"/>
                  <li>
                  <h1 className="text-white text-sm">Security</h1>
                  <p className="text-xs">Scale without compromising</p>
                  </li>
                </ul>
                
              </div>
              <div>
              <div>
              <h1>Open Source</h1>
              <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <SiNextdotjs className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">Next.js</h1>
                  <p className="text-xs">The native Next.js platform</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                   <SiTurborepo className="size-5"/>
                  <li>
                  <h1 className="text-white text-sm">Turborepo</h1>
                  <p className="text-xs">Speed with Enterprise scale</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <CubeIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">AI SDK</h1>
                  <p className="text-xs">The Native AI for Typescript</p>
                  </li>
                </ul>
              </div>
              
              </div>
              
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Menu 2 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light">Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
          <div className="grid grid-cols-2 m-3 gap-x-4 w-[500px] *:text-stone-400 *:text-sm  ">
              <div>
                <h1>Use cases</h1>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <StarsIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">AI apps</h1>
                  <p className="text-xs">Deploy at the speed of AI</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <House02Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Composable Commerce</h1>
                  <p className="text-xs">Powerstore fronts that converts</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <ChartLineData01Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Marketing Sites</h1>
                  <p className="text-xs">Powering breakthroughs</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <CommandIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Multi-tenant Platforms</h1>
                  <p className="text-xs">Powering breakthroughs</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <SidebarTopIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Web Apps</h1>
                  <p className="text-xs">Powering breakthroughs</p>
                  </li>
                </ul>
              </div>
              <div>
                <h1>Users</h1>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <Wrench01Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">Platform Engineers</h1>
                  <p className="text-xs">Helping teams ship 6x faster</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <Triangle01Icon className=" size-5  "/>
                  <li>
                  <h1 className="text-white text-md">Design Engineers</h1>
                  <p className="text-xs">Powering breakthroughs</p>
                  </li>
                </ul>
              </div>
              </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Menu 3 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
          <div className="grid grid-cols-2 m-3 gap-x-4 w-[500px] *:text-stone-400 *:text-sm  ">
              <div>
                <h1>Tools</h1>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <CubeIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">Resource center</h1>
                  <p className="text-xs">Today's best practices</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <PuzzleIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Marketplace</h1>
                  <p className="text-xs">Extend and automate workflows</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <SidebarLeft01Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Templates</h1>
                  <p className="text-xs">Jumstart app developments</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <BookOpen01Icon className=" size-5"/>
                  <li>
                  <h1 className="text-white text-md">Guides</h1>
                  <p className="text-xs">Find help quickly</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <GeometricShapes02Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Partner Finders</h1>
                  <p className="text-xs">Get help from solution partners</p>
                  </li>
                </ul>
              </div>
              <div>
                <h1>Company</h1>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <SmileIcon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-sm">Customers</h1>
                  <p className="text-xs">Trusted by the best teams</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <Wrench02Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Blog</h1>
                  <p className="text-xs">THe latest post and changes</p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <BookOpen02Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Changelog</h1>
                  <p className="text-xs">See what shipped </p>
                  </li>
                </ul>
                <ul className="hover:text-white flex items-center space-x-3 my-5  ">
                  <Briefcase04Icon className=" size-5 "/>
                  <li>
                  <h1 className="text-white text-md">Press</h1>
                  <p className="text-xs">Read the latest news</p>
                  </li>
                </ul>
              </div>
              </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Menu 4 */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="font-light">
            Enterprise
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Menu 5 */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="font-light">
            Docs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Menu 6 */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="font-light">
            Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

