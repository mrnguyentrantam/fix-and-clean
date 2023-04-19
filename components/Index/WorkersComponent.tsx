export default function CategoryComponent() {
  const workers = [
    {
      id : 1,
      name: 'Dong Phuong',
      avatar: 'https://i1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=xPmtakLGIw47TFSMDaI2fw',
      rate: 4,
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      address: 'quan tan binh , tp hcm',
      services: [
        'sửa ống nước',
        'massage BJ',
        'thổi kèn',
        'xúc bình xăng con'
      ]
    },
    {
      id : 2,
      name: 'Dong Phuong',
      avatar: 'https://i1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=xPmtakLGIw47TFSMDaI2fw',
      rate: 4,
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      address: 'quan dong da , Ha noi',
      services: [],
      like: true,
    },
    {
      id : 3,
      name: 'Dong Phuong',
      avatar: 'https://i1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=xPmtakLGIw47TFSMDaI2fw',
      rate: 4,
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      address: 'quan tan binh , tp hcm',
      services: [
        'sửa ống nước',
        'massage BJ',
        'thổi kèn',
        'xúc bình xăng con'
      ]
    },
    {
      id : 4,
      name: 'Dong Phuong',
      avatar: 'https://i1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=xPmtakLGIw47TFSMDaI2fw',
      rate: 4,
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      address: 'quan tan binh , tp hcm',
      services: [
        'sửa ống nước',
        'massage BJ',
        'thổi kèn',
        'xúc bình xăng con'
      ]
    },
    {
      id : 5,
      name: 'Dong Phuong',
      avatar: 'https://i1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=xPmtakLGIw47TFSMDaI2fw',
      rate: 4,
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      address: 'quan tan binh , tp hcm',
      services: [
        'sửa ống nước',
        'massage BJ',
        'thổi kèn',
        'xúc bình xăng con'
      ]
    },
    {
      id : 6,
      name: 'Dong Phuong',
      avatar: 'https://i1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=xPmtakLGIw47TFSMDaI2fw',
      rate: 4,
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      address: 'quan tan binh , tp hcm',
      services: [
        'sửa ống nước',
        'massage BJ',
        'thổi kèn',
        'xúc bình xăng con'
      ]
    },
    {
      id : 6,
      name: 'Dong Phuong',
      avatar: 'https://i1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=xPmtakLGIw47TFSMDaI2fw',
      rate: 4,
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      address: 'quan tan binh , tp hcm',
      services: [
        'sửa ống nước',
        'massage BJ',
        'thổi kèn',
        'xúc bình xăng con'
      ]
    },
    {
      id : 8,
      name: 'Dong Phuong',
      avatar: 'https://i1-giaitri.vnecdn.net/2022/12/15/avatar-2-1-jpeg-2238-1671050566.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=xPmtakLGIw47TFSMDaI2fw',
      rate: 4,
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      address: 'quan tan binh , tp hcm',
      services: [
        'sửa ống nước',
        'massage BJ',
        'thổi kèn',
        'xúc bình xăng con'
      ]
    },
  ];

  return (
    <>
      <div className="mt-20">
        <h2 className="text-center text-3xl">Danh sách thợ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {
            workers.map((worker) => {
              return (
                <div key={worker.id} className="bg-white rounded-2xl overflow-hidden">
                  <a href="#" className="flex flex-wrap h-full content-between">
                    <div className="w-full">
                      <div className="avatar relative group">
                        <img className="w-full object-cover h-[250px]" src={worker.avatar} />
                        <svg className=" group-hover:hidden absolute top-[5%] right-[5%] max-w-[30px] text-red-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                        </svg>
                        <svg className=" group-hover:block hidden absolute top-[5%] right-[5%] max-w-[30px] text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                        </svg>
                      </div>
                      <div className="p-5 pb-0">
                        <h3 className="text-2xl">{worker.name}</h3>
                        <div className="flex items-center mt-2 text-md">
                          <svg className="max-w-[20px] mr-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                          </svg>
                          {worker.address}
                        </div>
                        <hr className="mt-4 mb-2" />
                        <div className="flex flex-wrap">
                          {worker.services.map((service) => {
                            return (
                              <div>
                                <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full inline">{service}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="rating p-5 w-full flex justify-between">
                      <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <div className="flex items-center">
                        <svg className="max-w-[18px] w-full mr-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <p className="text-xs">999</p>
                      </div>
                    </div>
                  </a>

                </div>
              )
            })
          }
        </div>

        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5 mx-auto block">Xem thêm</button>

      </div>
    </>
  )
}