import Image from "next/image";
import { NavVercel } from "./components/NavVercel";
import { IoTriangleSharp} from "react-icons/io5";
import { GitMergeIcon ,Globe02Icon,NotificationBubbleIcon,ChartLineData01Icon,ReplayIcon,Book01Icon,OfficeIcon,Shield02Icon,Menu03Icon, CircleArrowUp02Icon} from "hugeicons-react";
import { FaCircleNotch,FaArrowsRotate,FaXTwitter} from "react-icons/fa6";
import { Terminal, TerminalIcon } from "lucide-react";
import { Charts } from "./components/charts";
import { SiGithub,SiLinkedin,SiYoutube  } from "react-icons/si";






export default function Home() {
  return (
    <div className="relative scroll-smooth">
        <div className="mx-auto ">
      {/* sticky top Nav */}
      <nav className=' fixed top-0 bg-black border-1 border-b-gray-50/10  right-0 left-0 px-5 lg:px-12 py-3 flex justify-between'>
      <div className="flex space-x-8">
      {/* darkmode */}
        <Image
      src="/VercelDark.png"
      className="p-3"
      width={150}
      height={10}
      alt="Vercel logo"
    />
      
   <NavVercel/>
   {/* Buttons section */}
     </div>
        <div className="space-x-4 hidden my-2 lg:flex *:lg:px-6  *:text-sm *:border-1 *:border-slate-50/10">
          <button className="rounded-md  hover:dark:bg-stone-900  ">Log in</button>
          <button className="rounded-md  hover:dark:bg-stone-900  ">Contact</button>
          <button className="rounded-md  bg-slate-950 dark:bg-stone-100 dark:text-black text-white hover:dark:bg-gray-200">Sign up</button>
        </div>
        <div className="flex items-center  lg:hidden justify-center">
       <Menu03Icon className="lg:hidden flex size-8"/>
        </div>
    </nav>
    {/* Homepage */}
    <main className="mt-24 mx-5 lg:mx-65">
      <div className=" bg-linear-[190deg,black_50%,orange_70%,cyan_80%,teal] flex flex-col text-center items-center justify-center px-5 md:px-24 py-30 md:py-48 border-1 border-slate-50/10 space-y-7 ">
            <h1 className="text-3xl lg:text-5xl font-semibold">Your complete platform for the web.</h1>
        <p className="text-base lg:text-2xl text-stone-400 font-normal max-w-xl">Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.</p>
        <div className="*:text-xs *:lg:text-base *:rounded-full flex space-x-8 *:font-medium">
          <button className="bg-white px-3 py-2 lg:px-4 lg:py-3 text-black flex hover:bg-gray-300 items-center"><span className="px-2"><IoTriangleSharp/></span>Start Deploying</button>
          <button className="bg-black text-white border-1 border-1-stone-50/10 hover:bg-stone-900 px-5 py-3 lg:px-10 lg:py-3 ">Get a demo</button>
        </div>
      </div>
      {/* container  */}
      <div className=" border-1 border-slate-50/10 p-20 flex items-center  justify-center">
      <div className="max-w-2xl text-center" >
      <h1 className="text-xl lg:text-3xl font-semibold items-center inline-block ">Develop with your favorite tools <span className="inline-block align-middle size-6"><Terminal/>
      </span>
          </h1>
          <h1 className="text-xl lg:text-3xl font-semibold items-center inline-block">Launch globally instantly <span><Globe02Icon className="inline-block size-6 align-middle"/> </span>Keep pushing<span className="inline-block align-middle size-6"><GitMergeIcon/> </span></h1>
      </div>
       </div>
       {/* Gap */}
       <div className="border-1 border-t-0 border-b-0 border-slate-50/10 py-2">
      </div>
       {/* container 2  */}
       <div className="grid grid-row-1 md:grid-cols-2  md:divide-x md:divide-y-0  divide-y divide-slate-50/10 border-1 border-slate-50/10 ">
       {/* First Column */}
       <div className="flex flex-col space-y-3 p-10 select-none">
        <h1 className="text-stone-400 text-lg items-center flex"><span className="pr-2"><TerminalIcon className="size-6"/></span>Git-connected Deploys</h1>
        <div className="flex flex-col">
        <h1 className="text-2xl font-medium">From localhost to https, in seconds.</h1> 
        <h1 className="text-stone-400 text-2xl font-medium">Deploy from Git or from your Cli</h1>
        </div>
        <div className="relative">
          <div className="p-2 relative ring-1 ring-gray-50/10  rounded-md max-w-xs ">
          <div >
            <div className="space-x-1">
            <button className="p-1 rounded-full bg-red-500"></button>
            <button className="p-1 rounded-full bg-blue-500"></button>
            <button className="p-1 rounded-full bg-green-500"></button>
            </div>
            <div className=" text-xs font-medium ring-1 px-6 py-1 my-2 rounded-md ring-gray-50/10
            "><h1>Vercel.com</h1></div>
          </div>
          <h1 className=" text-xl md:text-3xl flex font-medium p-10  rounded-md border-1 border-gray-50/10 ">What will you ship ? <span><IoTriangleSharp className="size-20 opacity-20"/></span></h1>
          </div>
        </div>
       </div>
       {/* Second COlumn */}
     <div className="flex flex-col space-y-3 p-10 select-none">
        <h1 className="text-stone-400 text-lg items-center flex"><span className="pr-2"><NotificationBubbleIcon className="size-5"/></span>Collaborative pre-production
        </h1>
        <div className="flex flex-col">
        <h1 className="text-2xl font-medium ">Every deploy is remarkable.<span className="text-stone-400">Chat with your team on real, production-grade UI, not just designs</span>.</h1> 
        </div>
        {/* Design */}
        <div className="ring-1 ring-gray-50/10 rounded-md p-3 text-sm  w-1/2">
      <h1>Swapped out the <span className="text-stone-400">button</span> for some variants we needed</h1>
        </div>
        <div className="ring-1 ring-gray-50/10 rounded-md p-3 text-sm flex ml-36 w-1/2">
      <h1>How about this instead?</h1>
        </div>
        <div className="ring-1 ring-gray-50/10 rounded-md p-3 text-sm  w-1/2">
      <h1>I like this, Does this work with brand tweaks <span className="font-semibold">@mamuso</span></h1>
        </div>
        <div className="ring-1 ring-gray-50/10 rounded-md p-3 text-sm flex space-x-4  ml-36 items-center w-1/2">
      <h1>This looks great </h1>
      <CircleArrowUp02Icon className="size-5 text-white"/>
        </div>
       </div>
       </div>
       {/* Container  3 */}
      <div className=" border-1 border-slate-50/10  border-t-0 border-b-0  p-10">
      {/* First Column */}
        <div className="flex flex-col space-y-3 relative">
        <h1 className="text-stone-400 text-lg items-center flex"><span className="pr-2"><ChartLineData01Icon className="size-5"/></span>Front-end Observability</h1>
        <div className="flex flex-col">
        <h1 className=" text-2xl font-medium">Privacy-friendly,lightweight Analytics.</h1> 
        <h1 className="text-stone-400 text-2xl font-medium md:w-150">Upgrade your post-launch workflow with actionable, real insights.</h1>
        </div>
       </div>
       <Charts/>
       </div>
       {/* Container 4 */}
       <div className="grid grid-row-1 md:grid-cols-2 select-none md:divide-x md:divide-y-0 divide-y divide-slate-50/10 border-1 border-b-0 border-slate-50/10 ">
       {/* First Column */}
       <div className="flex flex-col space-y-4 p-10">
        <h1 className="text-stone-400 text-lg items-center flex "><span className="pr-2"><ReplayIcon className="size-5"/></span>Instant Rollbacks
        </h1>
        <div className="flex flex-col">
        <h1 className="text-2xl font-medium ">Go ahead, deploy on Friday.<span className="text-stone-400"> Instantly rollback to a working deployment.</span>.</h1> 
        </div>
        {/* design */}
        <div className="ring-1 ring-gray-50/10 rounded-md p-3 max-w-sm ">
        <div className="text-sm font-medium flex justify-between items-center">
      <h1>Vecrcel-site/ <span className="text-stone-400">Jbx24yC</span> </h1>
      <h1 className="text-stone-400">1d ago</h1>
      <div>
      <FaCircleNotch className="size-10 text-emerald-400"/>
      </div>
        </div>
        <div className="text-sm font-medium flex justify-between ">
      <h1 className="font-medium">ba55678</h1>
      <h1 className="text-stone-400">Update bento grid design</h1>
        </div>
        </div>
     
        <FaArrowsRotate className="size-15 opacity-40"/>

        <div className="ring-1 ring-gray-50/10 rounded-md p-3 max-w-sm ">
        <div className="text-sm font-medium flex justify-between items-center">
      <h1>Vecrcel-site/ <span className="text-stone-400">Jbx24yC</span> </h1>
      <h1 className="text-stone-400">10m ago</h1>
      <div>
      <FaCircleNotch className="size-10 text-red-400"/>
      </div>
        </div>
        <div className="text-sm font-medium flex justify-between ">
      <h1 className="font-medium">kf7v2kb</h1>
      <h1 className="text-stone-400">Update bento grid design</h1>
        </div>
        </div>
       </div>
       {/* Second COlumn */}
     <div className="flex flex-col space-y-4 p-10">
        <h1 className="text-stone-400 text-lg items-center flex"><span className="pr-2"><Book01Icon className="size-5"/></span>Conformance
        </h1>
        <div className="flex flex-col">
        <h1 className="text-2xl font-medium ">Move fast, don’t break things.<span className="text-stone-400"> Keep quality high while maintaining velocity with Enterprise Monorepos.</span>.</h1> 
        </div>
        <div className="grid grid-cols-2 ring-1 ring-gray-50/10 ">
         <div className="p-3 space-y-3">
          <h1>Conformance</h1>
            <div className="ring-1 ring-gray-50/10 rounded-md p-6 max-w-sm bg-slate-50/5 flex items-center justify-between">
            <h1 className=" text-xs md:text-sm">Excellent</h1>
            <FaCircleNotch className=" size-4 md:size-6 text-emerald-400"/>
            <h1 className="text-sm ">9.4</h1>
             </div>
            <div className="ring-1 ring-gray-50/10 rounded-md  md:text-sm p-6 max-w-sm text-xs  bg-slate-50/5">Total Issues</div>
            <div className="ring-1 ring-gray-50/10 rounded-md md:text-sm p-6 max-w-sm  text-xs bg-slate-50/5">Major Issues</div>
         </div>
         <div className="p-3 space-y-3">
          <h1>Code Owners</h1>
            <div className="ring-1 ring-gray-50/10 rounded-md p-6 max-w-sm text-xs  md:text-sm bg-slate-50/5">Vercel/design</div>
            <div className="ring-1 ring-gray-50/10 rounded-md p-6 max-w-sm text-xs md:text-sm bg-slate-50/5">Vercel/eng</div>
            <div className="ring-1 ring-gray-50/10 rounded-md p-6 max-w-sm text-xs  md:text-sm bg-slate-50/5">Vercel/marketing</div>
         </div>
        </div>
       </div>
       </div>
       {/* container 5 */}
      <div className=" border-1 border-slate-50/10 p-10 flex flex-col space-y-2 md:space-y-0 md:flex-row items-center  justify-center">
      <div className="flex items-baseline">
      <h1 className="text-xl lg:text-2xl font-medium">Scale your </h1>
      <button className="mx-2 hover:dark:bg-stone-900 p-2 border-1 border-slate-50/10 rounded-full text-white flex hover:bg-gray-300  text-sm items-center"><span className="px-2"><OfficeIcon className="size-4"/></span>Enterprise</button>
      </div>
      <div className="flex items-baseline">
      <h1 className="text-xl lg:text-2xl font-medium">Without compromising </h1>
      <button className="mx-2 hover:dark:bg-stone-900 p-2 border-1 border-slate-50/10 rounded-full text-white flex hover:bg-gray-300  text-sm items-center"><span className="px-2"><Shield02Icon className="size-4"/></span>Security</button>
      </div>
      
       </div>
       {/* Gap 2 */}
       <div className="border-1 border-t-0 border-b-0 border-slate-50/10 py-2">
      </div>
      {/* Container 6 */}
      <div className="flex flex-col md:flex-row  divide-x divide-dashed divide-slate-50/10 border-1 border-slate-50/10 ">
       {/* First Column */}
         <div className=" space-y-4 p-10 text-center  md:text-left  ">
        <div className="flex flex-col ">
        <h1 className="text-2xl font-medium ">Ready to deploy? <span className="text-stone-400"> Start building with a free account. Speak to an expert for your <span className="text-blue-400">Pro</span> or <span className="text-purple-400">Enterprise</span> needs.</span></h1> 
        </div>
        <div className="flex space-x-3 font-medium items-center justify-center md:justify-start">
        <button className=" hover:dark:bg-stone-200 p-2 bg-white border-1 border-slate-50/10 rounded-full text-black flex  text-sm items-center">Start Deploying</button>
        <button className=" hover:dark:bg-stone-900 p-2 border-1 border-slate-50/10 rounded-full text-white flex hover:bg-gray-300  text-sm items-center">Talk to an Expert</button>
        </div>
       </div>
       {/* Second COlumn */}
       <div className="space-y-4 p-10 max-w-xs">
        <div className="flex flex-col">
        <h1 className="text-base font-medium ">Explore Vercel Enterprise <span className="text-stone-400"> with an interactive product tour, trial, or a personalized demo.</span></h1> 
        </div>
        <div className="font-medium">
        <button className=" hover:dark:bg-stone-900 p-2 border-1 border-slate-50/10 rounded-full text-white flex hover:bg-gray-300  text-sm items-center">Explore Enterprise</button>
        </div>
       </div>
       </div>
       
    </main>
    {/* Footer */}
    <footer className="lg:mx-65 mx-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0  my-15 lg:my-20  place-content-baseline md:place-items-start ">
        <div className="space-y-4">
          <h1 className="text-sm font-semibold">Products</h1>
          <ul className="*:text-stone-400 space-y-3 *:text-sm *:font-normal *:hover:text-white">
            <li>AI</li>
            <li>Enterprise</li>
            <li>Fluid Compute</li>
            <li>Next.js</li>
            <li>Observability</li>
            <li>Previews</li>
            <li>Rendering</li>
            <li>Security</li>
            <li>Turbo</li>
            <li>v0</li>
          </ul>
        </div>
        <div className="space-y-4">
        <h1 className="text-sm font-semibold">Resources</h1>
        <ul className="*:text-stone-400 space-y-3 *:text-sm *:font-normal  *:hover:text-white">
          <li>Community</li>
          <li>Docs</li>
          <li>Guides</li>
          <li>Help</li>
          <li>Integrations</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Solution Partners</li>
          <li>Templates</li>
        </ul>
        </div>
        <div className="space-y-4">
        <h1 className="text-sm font-semibold">Company</h1>
        <ul className="*:text-stone-400 space-y-3 *:text-sm *:font-normal  *:hover:text-white">
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Changelog</li>
          <li>Contact Us</li>
          <li>Customers</li>
          <li>Partners</li>
          <li> Privacy Policy</li>
          <li>Legal</li>
        </ul>
        </div>
        <div className="space-y-4 ">
        <h1 className="text-sm font-semibold">Social</h1>
        <ul className="*:text-stone-400 space-y-3 *:text-sm *:font-normal *:flex *:items-baseline  *:hover:text-white">
          <li><span className="pr-2"><SiGithub className="size-3"/></span>GitHub</li>
          <li><span className="pr-2"><SiLinkedin className="size-3"/></span>LinkedIn</li>
          <li><span className="pr-2"><FaXTwitter className="size-3"/></span>Twitter</li>
          <li><span className="pr-2"><SiYoutube className="size-3"/></span>YouTube</li>
        </ul>
        </div>
      </div>
      {/* Darkmode Switcher and System operational */}
      <div className="flex justify-between mb-10">
        <button className="text-blue-500 text-sm hover:bg-gray-50/10 font-medium p-2 rounded-md hover:border-gray-50/10"> All Systems normal</button>
      </div>
    
     </footer>
    </div>
    </div>  

    
  );
}
