import React from 'react'
import delivery from '../assets/icons8-food-delivery.png'
import cooking from '../assets/icons8-cooking.png'
import refund from '../assets/icons8-refund.png'


const Delivery = () => {
    return (

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-14 mx-auto">
                
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-25 h-25 inline-flex items-center justify-center rounded-full bg-orange-100 text-indigo-500 mb-5 flex-shrink-0">
                        <img src={cooking} className='p-4' alt="" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Cooking</h2>
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-25 h-25 inline-flex items-center justify-center rounded-full bg-orange-100 text-indigo-500 mb-5 flex-shrink-0">
                        <img src={delivery} className='p-4' alt="" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Food Delivery</h2>
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-25 h-25 inline-flex items-center justify-center rounded-full bg-orange-100 text-indigo-500 mb-5 flex-shrink-0">
                            <img src={refund} className='p-4' alt="" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Refund process</h2>
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

    )
}

export default Delivery
