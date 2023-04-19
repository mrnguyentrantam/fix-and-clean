export default function CategoryComponent() {
  const categories = [
    {
      id: 1,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 2,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 3,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 4,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 5,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 6,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 7,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 8,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 9,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 10,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 11,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
      id: 12,
      name: 'category 1',
      image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className="
                bg-white
                rounded-lg
                hover:opacity-75
                text-center
                p-3
              "
            >
              <a href="#">
                <img className="max-w-[200px] w-full mx-auto rounded-full" src={category.image} />
                <h3 className="pb-5 mt-3 text-lg">{category.name}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </>
  )
}