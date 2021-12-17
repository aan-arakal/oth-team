import Image from "next/image"
function addEplisis(text){
    console.log('ddd')
   return text.length<=13 ? text :text.substr(0,10)+"..."
}
export default function OthFETeam({results}){
    return(
 
<div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
<Image 
  width={100}
  height={100}
className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/images/person.jpeg" alt="Woman's Face"/>
<div className="text-center space-y-2 sm:text-left">
  <div className="space-y-0.5">
    <p className="text-lg text-black font-semibold">
 {results? addEplisis(results.name):''}
    </p>
    <p className="text-gray-500 font-medium">
    {results? results.title:''}
    </p>
  </div>

<p className="text-gray-500 font-thin text-sm">
eric.feldman@ey.com
    </p>
    <p className="text-gray-500 font-thin text-sm">
    +12127737790
    </p>
</div>
</div>


    )
}