import React from 'react'

function OurApproch() {
  return (
    <section className='w-full sm:text-2xl sm:px-10  px-5 bg-white'>
        <h1 className='text-4xl py-20'>Our approach.</h1>
        <div className="line w-full bg-zinc-700 h-[1px]"></div>
        <div className="flex justify-between py-10 ">
        <h3 className='w-1/3 '>A simple philosophy: <br/> quality over quantity.</h3>
            <div className='w-1/2'>
        <p className='sm:w-5/12'>We build brands that set new benchmarks. To do so, we don’t do volume. We partner with only five clients a year, ensuring unmatched focus, precision, and impact. Every detail is crafted, every decision strategic, and every outcome transformative. </p>

            </div>
        </div>
        <div className="line w-full bg-zinc-700 h-[1px] "></div>
        <div className="flex w-full justify-between py-10">
        <h3 className='w-1/3'>Performance & emotion.
         <br/> You need both.</h3>
         <div className='w-1/2'>
        <p className='sm:w-5/12'>Data is vital. Fostering an emotional connection with your audience is equally vital if you want to drive retention and advocacy. That’s why we create brands that not only captivate but also deliver measurable and sustainable growth.</p>

</div>
        </div>
    </section>
  )
}

export default OurApproch