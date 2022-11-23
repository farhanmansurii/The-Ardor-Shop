import Carousel from 'nuka-carousel/lib/carousel';
import { AiOutlineArrowRight } from 'react-icons/ai';
export default function CarousalProducts({ products }) {
  return (
    <>
      <>
        <div className="flex w-11/12 lg:w-10/12 mx-auto p-2 font-semibold mt-4 mb-3 text-2xl uppercase  ">
          Top Products <AiOutlineArrowRight className="my-auto mx-2" />
        </div>
        <div className="w-10/12 mx-auto">
          <Carousel
            adaptiveHeight="true"
            defaultControlsConfig={{
              pagingDotsIndices : false
            }}
            renderCenterLeftControls={({ previousSlide }) => <button onClick={previousSlide}>Previous</button>}
            renderCenterRightControls={({ nextSlide }) => <button onClick={nextSlide}>Next</button>}
          >
            {products.map((e) => (
              <div className="carousel-item h-[300px] flex lg:h-[350px] bg-cover bg-center " style={{ backgroundImage: `url(${e.images[0]})` }}>
                <div className="flex flex-col-reverse h-full w-full bg-gradient-to-t from-black to-slate-500/20  font-semibold bottom-0">
                  <div className=" top-0 flex pb-5 px-4 font-normal font-inter text-white text-2xl lg:text-4xl uppercase  ">{e.title}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    </>
  );
}
