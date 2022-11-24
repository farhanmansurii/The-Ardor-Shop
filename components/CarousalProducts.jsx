import Carousel from 'nuka-carousel/lib/carousel';
export default function CarousalProducts({ products }) {
  return (
    <>
      <>
        <div className="w-full  mx-auto ">
          <Carousel
            wrapAround={true}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: 'none',
              },
            }}
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={() => previousSlide()} className="btn btn-circle font-[6px] text-white bg-base-100/50 border-2 border-primary hover:bg-yellow-500/50 hover:text-black duration-300  m-2">
                {' '}
                Prev{' '}
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={() => nextSlide()} className="btn btn-circle font-[6px] text-white bg-base-100/50 border-2 border-primary    hover:bg-yellow-500/50 hover:text-black duration-300 m-2">
                next
              </button>
            )}
          >
            {products.map((e) => (
              <div key={e.id} className="carousel-item ease-in-out duration-300 h-[250px] flex lg:h-[350px] bg-cover bg-center " style={{ backgroundImage: `url(${e.images[0]})` }}>
                <div className="flex flex-col-reverse h-full w-full bg-gradient-to-t from-black/60 to-black/20  font-semibold bottom-0">
                  <div className=" top-0 flex pb-5 px-4 uppercase text-primary text-2xl lg:text-5xl "> {e.title}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    </>
  );
}
