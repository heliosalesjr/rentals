import properties from '@/properties.json'
import PropertyCard from './PropertyCard'
import Link from 'next/link'

const HomeProperties = () => {
    const recentProperties = properties
    .sort(()=> Math.random() - Math.random())
    .slice(0,3)
  return (
    <>
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-violet-600 mb-6 text-center'>
                    Recent Properties
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {recentProperties === 0 ? (
                        <p>No properties found</p>
                    ) : recentProperties.map((property) => (
                        <PropertyCard className='mx-4' key={property._id} property={property}/>
                    ))}
                </div>
            </div>
        </section>

        <section className='m-auto max-w-lg my-10 px-6'>
            <Link href="/properties" className='block bg-slate-900 text-white text-center py-4 px-6 rounded-xl hover:bg-slate-600'>
            View All Properties
            </Link>
        </section>
    </>
    
  )
}

export default HomeProperties