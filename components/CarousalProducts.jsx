import { Button, Text } from '@nextui-org/react';
import Carousel from 'nuka-carousel/lib/carousel';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
export default function CarousalProducts({ products }) {
  return (
    <>
      <>
        <div className="w-11/12 mx-auto">
          <Carousel
            wrapAround={true}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: 'none',
              },
            }}
            renderCenterLeftControls={({ previousSlide }) => (
              <Button auto color="gradient" rounded light onClick={previousSlide}>
                <GrFormPrevious fill="current-color" />
              </Button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Button auto color="gradient" rounded light onClick={nextSlide}>
                <GrFormNext />
              </Button>
            )}
          >
            {products.map((e) => (
              <div className="carousel-item h-[300px] flex lg:h-[350px] bg-cover bg-center " style={{ backgroundImage: `url(${e.images[0]})` }}>
                <div className="flex flex-col-reverse h-full w-full bg-gradient-to-t from-yellow-500/70 to-red-500/30  font-semibold bottom-0">
                  <div className=" top-0 flex pb-5 px-4   ">
                    {' '}
                    <Text h1 size={30}  color='$white'  weight='medium'>
                      {e.title}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    </>
  );
}
