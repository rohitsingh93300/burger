import React from 'react'

import Cards from './Cards'

const burgers = () => {
    return (

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                   <Cards/>
                   <Cards/>
                   <Cards/>
                   <Cards/>
                   <Cards/>
                   <Cards/>
                   <Cards/>
                   <Cards/>
                </div>
            </div>
        </section>

    )
}

export default burgers
