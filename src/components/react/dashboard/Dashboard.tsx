import { useState, type ReactElement } from "react"
import Header from "../header/Header"
import ClipCard from "./clips/ClipCard"
import ClipItInput from "./ytb/ClipItInput"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { BiPaint } from "react-icons/bi";

export default function Dashboard({userDetail}: Record<string, any>) {

    const [oembed, setOembed] = useState<Record<string, any> | null>();
    const [selectedSubtitle, setSelectedSubtitle] = useState< number>(-1)
    const subtitleStyle: Record<string, string|Record<string, string>|ReactElement<any, any>|number>[] = [
        {
            id: 1,
            label: "Alex Hormozi",
            name: "alex_hormozi",
            dom:<div 
                className={`cursor-pointer text-center uppercase font-extrabold text-sm tracking-tight text-white bg-black px-2 py-1 rounded
                    transition transform duration-200 ease-in-out  
                    ${selectedSubtitle === 1 ? "border-4 border-green-400 shadow-lg" : "border-4 border-white"}
                `} 
                onClick={ _e  => { selectedSubtitle === 1 ? setSelectedSubtitle(-1) : setSelectedSubtitle(1)} }>
                Alex Hormozi
            </div>
        }
    ]


    return ( 
        <div className="grid grid-cols-12 h-screen">

            <div className="col-span-12 grid grid-rows-[auto_1fr]">
                <Header userInfo={userDetail}></Header>

                <main>
                    <div className="p-4 mt-[3em] container mx-auto  max-w-4xl">

                        <div className="flex p-2">
                            <div className="w-full">
                                <h1 className="text-2xl font-bold text-zinc-700 font-sans">Generate New Clips</h1>
                            </div>
                        </div>
                        <div className="flex mt-2 justify-around">
                            <div className="w-full max-w-md px-4">
                                <ClipItInput setOembed={setOembed}></ClipItInput>
                            </div>
                            {/* <div>
                                <img 
                                src="https://dqu1p08d61fh.cloudfront.net/static/images/short-button.jpg" 
                                alt="short-button" 
                                className="w-full max-w-sm sm:max-w-xs h-auto object-cover"/>
                            </div> */}
                        </div>


                        <div className="mt-[3em] md:mt-5 p-2 rounded-lg flex flex-col md:flex-row gap-4 min-h-[30em] md:min-h-[15em]">
                            <div className="flex justify-center">
                                <img className="md:h-44 md:w-56 rounded-lg" alt="thumbnail" src="https://i.ytimg.com/vi/LzKtLDRyzu8/hqdefault.jpg"/>
                            </div>
                            <div className="flex-1">
                                <TabGroup>
                                    <TabList className="flex justify-around bg-youtube p-2 rounded-t-lg shadow-sm">
                                        <Tab className="flex gap-1 items-center rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-gray/5 data-[selected]:data-[hover]:bg-gray/10 data-[focus]:outline-1 data-[focus]:outline-white">
                                            <BiPaint className="text-lg" />
                                            Subtitle Style
                                        </Tab>
                                        {/* <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-gray/5 data-[selected]:data-[hover]:bg-gray/10 data-[focus]:outline-1 data-[focus]:outline-white">
                                            Tab 2
                                        </Tab>
                                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-gray/5 data-[selected]:data-[hover]:bg-gray/10 data-[focus]:outline-1 data-[focus]:outline-white">
                                            Tab 3
                                        </Tab> */}
                                    </TabList>
                                    <TabPanels className="border-2 p-2 rounded-b-lg min-h-[10em] md:min-h-[15em]">
                                        <TabPanel>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {
                                                    subtitleStyle.map( (subtitle, index) => {
                                                        return subtitle.dom as ReactElement<any, any>
                                                    })
                                                }
                                            </div>  
                                        </TabPanel>
                                        {/* <TabPanel className="data-[selected]:bg-white/10">Content 2</TabPanel>
                                        <TabPanel className="data-[selected]:bg-white/10">Content 3</TabPanel> */}
                                    </TabPanels>
                                </TabGroup>
                            </div>

                        </div>

                        {/* {
                            oembed && oembed !== null && (
                                <div className="bg-gray-100 mt-5 p-2 rounded-lg shadow-sm">
                                                                            
                                    <img className="h-32 w-50 rounded-lg" 
                                            src={oembed.thumbnail_url} 
                                            alt="thumbnail"/>
                                </div>
                            )
                        } */}

                        <div className="flex p-2 mt-5">
                            <h1 className="text-2xl font-bold text-zinc-700 font-sans">Clips</h1>
                        </div>
                        <div className="p-2 mt-5">
                            <div className="flex gap-4 w-full justify-center"> 
                                <p className="text-zinc-700">Sort By : Newest</p>
                                <p>filter1</p>
                                <p>filter1</p>
                                <p>filter1</p>
                            </div>
                            <div className="p-2">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {
                                        new Array(6).fill(6).map( (e, index) => {
                                            return ( 
                                                <ClipCard i={index} key={index}></ClipCard>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </main>

            </div>
        </div>
    )
}