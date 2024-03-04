
import Image from "next/image";

interface Props {
  heading: string,
  name: string,
}

const Section_Point = ({heading, name}: Props) => {

  //image format and width and height
  var imgFormat;
  var imgW;
  var imgH;
  var divWidth;

  if (heading == 'skills') {
    //skill icon
    imgFormat = '.ico';
    imgW = 50;
    imgH = 50;
    divWidth = 48;

  } else { 
      //certificate image
      imgFormat = '.png'; 
      imgW = 300;
      imgH = 270;
      divWidth = 52;
    }

  //className of container
  const classes = `flex flex-col justify-center items-center p-4 border-2 border-green-900 rounded shadow-md font-mono font-medium text-base md:text-xl hover:opacity-80 hover:scale-110  focus:opacity-80 focus:scale-110 min-w-48 w-${divWidth}`;

  //image path
  const imagePath = `/${heading}/${name}${imgFormat}`;

  //return div
  return (
    <div className={classes}>
      <Image src={imagePath} alt={name + ' Picture'} 
      width={imgW} height={imgH} />
      <h1 className="mt-2">{name}</h1>
    </div>
  )

}

export default Section_Point;