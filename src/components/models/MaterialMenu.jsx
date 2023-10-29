import { Hud, OrthographicCamera, Environment, useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Buttons from './Buttons'
import floorObj from '../../../public/models/dinning_room/secondary_materials/Floor'
import chairObj from '../../../public/models/dinning_room/secondary_materials/Chair'
import tableObj from '../../../public/models/dinning_room/secondary_materials/Table'
import cabinObj from '../../../public/models/dinning_room/secondary_materials/Cabinet'

export default function MaterialMenu({ setTextureSelect,componentSelect}) {

    let textureArray=[]; 
 switch(componentSelect){

    case 0:
         textureArray =  [
            floorObj[0], floorObj[1],floorObj[2], floorObj[3], floorObj[4],];
            break;

     case 1:
        textureArray =  [
            chairObj[0], chairObj[1],chairObj[2], chairObj[3], chairObj[4],];
            break;
        
            
    
    case 2:
         textureArray = [
            tableObj[0], tableObj[1],tableObj[2], tableObj[3], tableObj[4],]
            break;
    
    case 3:
     textureArray =  [
            cabinObj[0], cabinObj[1],cabinObj[2], cabinObj[3], cabinObj[4],];

    default:
    
        break;        


 }
    
  const texture = useLoader(TextureLoader, textureArray);

 

console.log(texture[0]);

  return (
    <Hud>
      <OrthographicCamera makeDefault position={[0, 0, 2]} zoom={50} />
    <ambientLight intensity={1}/>
    <spotLight intensity={120} fov={10}/>
      <Buttons id={0} texture={texture[0]} position={[-5, -4.5, 0]} setTextureSelect={setTextureSelect} />
      <Buttons id={1} texture={texture[1]} position={[-2.5, -4.5, 0]} roughness={0.2} setTextureSelect={setTextureSelect} />
      <Buttons id={2} texture={texture[2]} position={[-0, -4.5, 0]} setTextureSelect={setTextureSelect} />
      <Buttons id={3} texture={texture[3]} position={[2.5, -4.5, 0]} roughness={0.5} setTextureSelect={setTextureSelect} />
      <Buttons id={4} texture={texture[4]} position={[5, -4.5, 0]} setTextureSelect={setTextureSelect} />
    </Hud>
  )
}
