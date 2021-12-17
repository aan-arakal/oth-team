export default function OthFETeam({results}){
    return(
 
<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
<img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/images/person.jpeg" alt="Woman's Face"/>
<div class="text-center space-y-2 sm:text-left">
  <div class="space-y-0.5">
    <p class="text-lg text-black font-semibold">
 {results.name}
    </p>
    <p class="text-gray-500 font-medium">
    {results.title}
    </p>
  </div>

<p class="text-gray-500 font-thin text-sm">
eric.feldman@ey.com
    </p>
    <p class="text-gray-500 font-thin text-sm">
    +12127737790
    </p>
</div>
</div>


    )
}