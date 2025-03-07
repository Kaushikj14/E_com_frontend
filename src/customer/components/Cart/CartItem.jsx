import React from "react";
import {Button, IconButton} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const handleUpdateCartItem=(num)=>{
    const data = {data:{quantity:item.quantity+num},cartItemId:item?.id} 
    dispatch(updateCartItem(data));
  }

  const handleRemoveCartItem = () =>{
    dispatch(removeCartItem(item?.id));
  }


  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src={item.product?.imageUrl}
            // src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIWFRMVFxUaFRgVFRUVFxcXFRUXFxcXFxUYHiggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0fHR0tKy0tLS0tKy0tLS0tKysrLS0rLS0tLS0rKystLS0tLS0tLS0rLS0tLS03KzItLS02K//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUHBgj/xABMEAABAwEEBQgFBgwEBwEAAAABAAIRAwQSITEFBkFRYRMicYGRobHBBzJS0fAUQmKSsuEVIyRDU2Nyc4KiwvEzVHSzFjRkg6PS4hf/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgMBAAMBAQEAAAAAAAABAhEDITESMkFRImET/9oADAMBAAIRAxEAPwC1NIYdKzDTQ/K6v7bvNdnoux2x9GnUFtxexjiKlCm4AuaCRLbpXDaWFUWireLHPDzJALATvAxhZ8PVq+W7kMD/ABXdDfArXNBn8mo/u6f2AsgLnCoZZiQMnAjIkZwtJ0Rp4soU2uslpAbTbLhTbUGDRjzXHDqV83cieLq10FY83BNUCbww3JmwWxtWmKjQbrpIvC66JjEbMk7S9Y7pHkuet4FbSLmvdTDTOJk5ZAxHWpFDWWvSBaKDHSZJc4nYBlHDvVdpt1ZrhUoGm68SCHh2EAZEEblVMOkHuMVKLZ3Md5ylLq9Czbp6uslqBIDaTMAZbSxx4kwhZq9SoDUquvPvETda2MARl1rm22G3P5xtQE+zTZs/hU6yPdZmONqtILCWwal1gBAOA3zOXBFyuXR4T5u3QHHgitFQNaXbcT2LlrTr3YWYNqF2Bm7TfAPSRBVJpv0gUnU3U6TahcQQHENaATvxk9QUfGX8bXkwn7d/obTTbxex15mTmg5YZgb11tltDagDmuBado+M1500drzaKbWMcyk5jIHNZyb4+dzgecTiecDjtC7nRvpJs1molzZq33A8kHXXtJGJxHRmujjmWF+b4w5LhnPqdVrKQ4rLv/2qh/k6316ZRu9Mtnj/AJWv20v/AGW7mdfpW1NpAXjL3Ehg3naepU1s1hAFwc0ZQDiTvJWe6d9IprVOUp0HMdduc5zSLt4mRAwJnEcAqew60VXVqRrFgoteC8MpidovFxl5icp6lhnjnd68dPHlxyTfdaWazjF6SInnYz29STbXSIKFW0tqG+xwc0tvAtIIuzgQU3RZffwGJXH3b26upEw0A2zv2G64k8Y/ss8q03cxxc4m9jJwDZEHjn3LTiAWOaRgZB6CquhoKz3pNIHLPFdOGcxcmWNyu3N6p0Q6paRnFR8dpXUmibrWNGJBk7heKodTWfjLWf19QfzOXY2SkS5h4HxKjk9PDxD/AART23p24oK+5IIKdK25vV5sWWz8aNP7AWcadH5XW/eO8StO0GIstl/c0vsBZfp1/wCVVv3j/Erq4fyrDl8iFVH4w/st+yVplgc7k6MewyfqBZoxpdWujNwYB1gjzWtWaz8m1owJawDsAEp836Li9p2hSAaABgFGq1oJHFTnVTuAVTaqgvHfK562h6rV5reko7I6cFFbUBaMNpzU6wMxyS0aS0QAOC4D0oV5fRpzk17j/EQ0fZctGFMGMPFZJr/aL1sqDYwMYOpoJ73OWnFP9M8705pNuSyU25dLISEoIIAEo3bvjBEjKAKUoFJQCAttC6dq2ckNM03esw5Y7W+yfHw1fQ9UOpse2Ye1rhIgw4AiR1rFFt+gKM2agSZJpUpPSwLn5cZ6248rrSaJy2Sn6beCUynmjasWjltRmi/bJ/zNT7Tl19Ic5g+j71xupvr23/UVPtOXY05lu+6PNPP8k4eJ0FBIk70EtmpdGMHyOycaFH7DVlukbMX2qviABUfiTHzitJo2i7ZrEP8Ap6Xcxq4G1PBqVDhi9xxYT847b4XTw+1hyeRB0dZZtPrN5rqQxMT0YYrVXjwWY6NrRXnm4vp5sJ27Odh3rQK9ua0845zAGOXwE+X9DiWEKjth5x6T4q1GkKRyeB0kDxVPaK7JPPacTkQdvBc+UbSnbKZaOkq5scKistoZAAeMJzIHirGzW1gnnN+s33pyFtdsaFhGnq1+0Vnb6tQjoLzHdC2WvpJrGudebDWl3rNyaCd/BYW8k4nPatuOM8yHJspxyaK1QJBBBAGEQRgoyUgJBBBMDBW66qY2OzT+go/YasKW46qGLHZh+ppbPoBY8vi+P1eEInBN8pjt7EdV0QsdNXJ6ljn23/U1PtOXbWSnOzIBcbqOOfbf9S/7Tl3FktLACC4SAPNGf5DHw6WDcgkG3U/aCNI2e6ItVV1GgCQQ2lTDZAyDRknaei6ZdhSZmZzS9X7ORRoGDBpU8TgPUGKu6VJjZ5zeohG8t9J1NduGsdmArWiGjm1MM8IAgZ8NqLTldzrk7L2WEzGwKfo+7ytqJvwaxxa0uHqjMhFb7HSe3/Ec0NOZY7zWl3vtH6UTKQIBO1PU7NnhujuJU6no+hH/ADDduYUlljpbLQ3shV0WnPmhGzLapNCk04RHGVbP0czPlm5TG+EVl0Qxxnl2D43pWwKzS1MMoPdPzY+sbvmuJcV32vNlbTs7YqMcXVAIaZIAaSeqQFwBWnHOk5EEpBSkTloRCKUZSSgFhGgEEAYCCNEgAtU0C0GzUcPzTMcR8wbVlYWq6Hc0WWgT+ip7SPmD71jyrwO13NaQC4id85CfuUR1p57Ti5rcSSSLwJnAT1Rw4KdUeDgc85OeM7YyUCvaA5zebgGnjgRgMMujiVitb6jwX20jI2hxHWXFTNOgtqjEAXA4YmMZGPHBMagt51tP68+ai68aSDat0ZinTHe8npzRlN5HLqI3ytvt/HYiXJcpOOHegn8F9LajpW1NAaHMAAgANiAIGAGSeGmbX7bPqn3qKAYRmfjpUno+/SVqOPKgT7LSPNQ7XbrUTjXPVI7pT5cExXTgqNRsgLpdidpjOcyptPRzCPVTFE849A8FOpOwV6SYqaObuwjiElmjW8frH3qW8lJZKWhtz+sFEMugEmQcyTtHuKo3K71md+MA3Nb4uPmFRuXRh4zvpLgkFLKbKojZUrRdiNaq2mNsydwAmfDtUV66XUezG/UqgYMaGzxcZP2R2qMrqHPXPNaRIOBBIPSMCjCmaXpxXqje9x7TKiKoQggUAgmAWpaPs1bkaQjAU2ACTldEeSywnArTrJZiGtkkCBvwjbx2rLlul4JdagYhzSZzgPdO3MJFCkxrg7k3giMOTcQY3gposdMB5H8W+cypQttZoDQ8iN5xWP1/xej2rtsq0HWgmmYq1S8YRgeBIUPS+iatpqmpiJAEXRgAIG1Pv05XA/xD3SOtBmnK4B55JjccdxwhL673o9fpU/8AA1f2/jtQVp+GKm2q+duAQT+6XzFMCg9DairOGxJVICYqCd6Ve3bU26oZVJoqTecZ4eAU9jFAqc15E7vAKaytgqSU7NOUwm2YqQwIDkdYD+OfwLR/IPvVSVP0q+atQ/Td3EhQHLeeMySkFKKQ5MEPWhakWNwsoI/OOccjsN0dzVnritW0NRdToUmXi26xswNsSe+VlyXUVjN1wGs7C21VWnMFv+2w+arCrbWsH5XWkyZZJ/7bFUlaTyFfQRokEyKptkgZyQO0wtddRBwzdEkRuwy4krLdBj8oo8KlM/VcHeS046UYc3v+qD5rHk0vAi6dse7PZ0hN1WjEEY5YHOMcSclLdaKJ5pqHraIw6kbm0ThenH2o37ljpohVHYRGXhmkl5Mt2cBx2Kf8npuGBEdI68kYslPY92WzxyR8hCaX+x9lBTfkzd7+w+5BPVBTNXWZXap6RHkpNHVcbKf1nD3K6o6SI9YsfwaHT4QhVtrSJFIk/sESN+IRuBU/8Nu2MpgftHySH6AjO4Ohr3eSsRpJ4zoOA38nhG/CUp2nAM4b+0147U4VVI1dpO+fj+6f5o6+rNMjGpHEscO9XtPSrT+cYRwx80HaW3SexVqpc4dWaeyt2CfFLZoCkM6zo2w0e9XZ0yNrfPwCjaV1ipto1M/UfHDmnin80MRrvkkjIkkdZnzUd5xThGEJuqt2ZBKSUZSSgHrBZuUq06ftvY3qc4A9xW92Ox0wMu3dsWMalOa22U3uyphzspxu3R3vC1RummkkcrBGwiPJYck3WmHTMNeGgW+0AZBzP9qmqJXOuBm21zMy5pkbfxbFTwtcfIi+iRuQCIlUS01ZpXrTTGyXE9THH3LuzZSQBEE94ywHauO1Mol1owGTHnvaP6l3BslTGBG6TvnDDYsOX1ph4gVKU4HOTPHAR4eKcFlJZMkEbI3cdhxHb0p0WV8wc8Mc9nBSGMcBF7Ak5xMbzPRmsqtUXHCTBgCc8Iw29iS2Zzi9tnPoVq+kDMA7Bj1e9MiiZx7sgCd/agaNMs9SBjsG5BPNpP2OdGzE5II2WmgOdTGVzrxTTrY4eqWDoB96rKrDkGnvKYfZXnJpx+i4+SvULa1dbKhEFzSOIKi4iSHNE7IcR2SoP4PrbGu7CPEpX4HrHaO1Gp/S3S7RRYQQbhmMbl0iJymd6pq9iAcbsAScnAZ9CtfwFV3jtS26vVN47fuTnzP2O3OV6FbCKpiTPPJMdBVZpyo9tF8mZbHq4kEgZ7M13I0A4ZgHoMrn/SDZOSsmUXqjG7Z+c7f9FXL2V8ZmU3UKWm6hWrM24pJRoIN0WpdCXVnRMMaB0udMfyrqn2bHAYk47ejHLbHUofo10c51CtUDZmoGj+FoO/6a6l1kDGhpY4AGQYmOk7s1ycl/01xnTKtYWltpqDcW/Yaq6VZazuBtdYjK8IjLBrR5KsXTj5Gd9GiRooVE6LUqvcrON29zIPaD5LvKemWDNsZbN56Z4rh9T2kco+AWktacCTzccOp2Sv6rCSD07MhtgbIXPne2mPi8bp6mfnAfwn3KQLcH/nWR79kErlKlLaMBt2xuG+c0/wAieg8Dhh0+9TtTpnUmkYOad8Nao4sLMTl0T71SiRtJAnAee1NU6rpwJngEtw198kp7z2o1UipW3u+OpBHX8DR/lB3Adf3IGt9PuJ81CbQd8FES4f3+5ASnVHbweqPGUh9Y7cemPIKK6uf7yfNEK5+B70aLaQLQBtjgZHZeSX2tu1wHS5oUWs9zsPIKINGT8xuOcjzT1CWvy2nleaf45XC+la3NNKhTBze9xj6LQ3+srrqVgIyaOpZ56UH/AJRSZBF2lOP03uH9AVYSfRZeOMTdVLTVTNdDKESiCCMJG170dyywU+ZN51R2YGdRwHcAukZVqE4NA6XDyVdq5RZTslnYcCKNOQd7mgnvJVnSfTkS3xXPfWsYhrJVvWu0O28tU7nkeSrk/pB96rVdleqVD0S8mO9R10RkNBEUAmHf6kWGbK54dBdVd04BrcOwq1fo9wIkSPDA48eKRqdaAyw0m3WyTUJJE51HR3KXXqg5d0j3rnuO60lVlWlByJjhw27E9Z6kwThjJjpgTv8AvT/KneQOme9G20kZgEcQCUrgcpVSgDkCJ3HGBGA8E1yYvGGjDHH50GO/E4qRSqsx5oE5xeHmnWGkJLQ4E5wR7lNxsPcQiW+yOxqClFjN7u3/AOkEtU+lm3SztoB6cPCE4zSjdrD9ckdkqj5M/BRCnxW/xiz+q6ijbqW4DpEeSsKZacnN8VxjevtTrah2A/WhR/5/w/t2YAGbh2DzlJdaGe13+5cn8pcMz2lLp274H3pfFP6dQKzOHxxWQek+petzvo06Y7r39S0OzW1pzLh8cPcss11q3rbXcDIvNH1abG+Svjnacr0oJTdRLeU0VsgSWymXENGbiAOl2A8UkBWWrtG/a7O3fWpdjXhx7gUqG01LO4ANBwAjMbEw6zOxN6IB2nZ1qye4HZ3qJb7RydCtUcBDab3bTg1hMLma6YO0yJ3+aCJggAcECV1MhIwiSmsnDfh24JBqGgbLFmot23Gk/wAQvHxUg0hxU6jVLcA0AARid3Ae9SHWskQYj9mfFY/VX8xUXdwHejIPDqEKzusOzsgeCl0aNL2oPb3I2cihbTO746UC13BXpsDHeqJ7B3HFJ/Br/Yw4G93KfqHpScm5BXX4Ofu7j70Ebg0q7qKAj60I+M1qgmB8SjEbvNKDUoNQQ21NmMdyU1+yB2CUV3glIA2ngFl2nKl60Vj+sf3OI8lqYbtWQWmpecTvJJ68SqxFRnlJCMolRAul9HdnDraxzjDabXvnjFwD+eepc0ux9H1KBWqbZa3sBcftNU0NPbSYcnz1g+aqdd6jaej7QZxLAwY7ajms81GFRc/r/aYszGSedUbhwa1x8Q1R89q+mfokaJaJBTtCUL9oos31GdjTePcCoJV/qPQDrW0n5jXu7rn9aL4GjPouzkdkpt9I+0eqI7k7fExeE96VdnYfDxhYNTAppxjiEsUj0dZJ+OtGaZ2uJ6IHkjY0fZbAMx3pY0s0YB2PDFV5a0GId1y4ecI2t3EHsSCw/DLuP1fuQVdyb93eUEah7pJRgIAJQPBao0ASpQkIwgCQBSoSS1BaNWyrdpVHTkx57GkrJHlahp912zVif0bh1uF0eKy1yqFSCgEZQVEKFoGo1lizXvbe49Qhn9JWfla3oCxFlmotOBFNpI3Ei8e8lTaDvJrjfSJWxoM4VCe1gHgV3vIcVmvpEd+Vhs+rTZ3lx8wlKHOgoJLUpUCS5dbqFQxq1f2WDr5zv6FyDgtI1EssWUOj13vPYbng1Tleji5pV3jAHDdgnhajtaOrBONoBOCgFn0s0LQN5CWyrxBHDA96DqO4Jp9nS0e0gubvI7UlgaMiB2KIRGRPajJRokyPiEah8pwCCWj0UEoBCEtaJEGpYaiCWEjFCMtSmhAoDndc3xZKg3mmP/I0nuBWcFaF6QXxZ2ja6o3sDXHyCzwrTFFEiKCBVEesNn5SrTp533saehzgD3StqhZTqZQv2yluZfeeppA73NWqtIWedVicBG5ZVr9QcLZUe5pa11y4Tk4Cm0GDlMg4LVCQm6jQ6AQCCRIMHDoKmU7GINal02XjDcTuGJ7At80bqlo9+LrJRJ/dtz6BgV1tKzMY0NY1rGNAADRAAyutaMAFpKh5hpaGtLpu2eqYE403gdpELVrBYeSpsptyY0DsGJ6ytAttla5sQS3HMZThhBB8Vxtqpljy05jPiozXiYISh3pJckyFmo49x6FGenJ+AiICDMQgneTCFyU9lo11IkssPwUEEdlAFJhLaFQBpTjSm0sIB0FANSAUd5Acl6QLPVfyQp03va0VHOLGOeG+oJcWgxtzXB3ZXobVWjec50uABaIGAJHOx4c2MvnKfrBqfYrWCa1Bt8/nGfi6n12+t1yFpj4i+vNDgkErTdN+iq4fxFqvfRqsxxy57cP5dirrN6Mq0k1K7GgTFxrnE7s4jvT3CQvR3Rh1arhgGsHWbzh3MXb8qqnQ2jhZ6fJgk4kkkRJPR0AdSsBKyyu60kPcomatdwgjEgzCAaUHBTs9Oj1f0sx5Bbg4es04OHVtHEYLrqNWRIWR2intGewjMdBXa6k6VdVpllQy+mQJOZa71SeOBHUqlRcdOirtAPqzIxMjZ0nDNUmktG8sJaHNe0YSMHAZAkEjvngukjrTL6cKil0z7kCCQ7AjMHNE5oVrrTQLXCpsOB7MD49io21VlWk7O3EQYlNISw8IMwKZRhp2BOlwSQ9AFcPFBKlBAMNCcuhRwSnBMKknJQlJASru1GwHKbkBecQxoJc4wANpSHYYyuy1b0YGUhUIHKvBxIm6DkAMOtOFasNB2IUWcmDJGNQzgXkAnujZlCl2h4yMCZjpifv6kKYgZzvOGJ34BRbQ7mnH424q9oV9pqXpxxy3daqtJWtlJhe8xuHkBtJTOs+mm0ACBee6Q1owmMyTsaMO1cPaK9Ss6/UdJ2D5regfBUWtMcVxZ64cJKkFzAP7+aqKLCpLSs2iXyo3JLnplsJ5qCIdTlOWGs+hU5Snnk4H1XDcfjBHeQLUy06mw62UXYPdyTtz/V6qmUdMdCtXaVZE8rTjffbHbK4JtIJp1hpk402k9AVfSPlc6z6ZpPbcZUbUdIm4bwABnFwwH3qha49CkiztEQOwQjcxTbtcmjbelLB3pBQlIzgdvwRh0pm8hxwTKn7o3oJm8PgIIBQKWCmQQlcoqSelC8mC9E52B+PjYkay0HYuWtDWn1W852GYBwHWYWiNZAhZnoDSrbPWvvkU3NIcQCYxBBIGJyjrXbWPTtnqj8XaKbuAeJHS04jrVRFidXqkDYOn3KvqYiTieOXYk6Q0lQYJfVY3pcB2b1yuldai6W0GmP0jgf5WnHrPYU7RIp9Zn8panRiGBreE5nvdHUmKNJKo0IxOJzk5ydvEqSB1ZrJrCGMSm0EG54YpwOP9kABSKUG8YQL0JkcUAouRmU3w2I5H3zKAcb0wlFMg/BSwgHL0JpxKVCQcUwRmiSh8bER4ILZtxRwjfsSC5ALQSJ4IIBoOTiCCaSXHFO0USCDJc0T1KvtVjpkiWA9IQQSOFWeyU2gwxo6AAp7GBBBBlO2JFfNBBIDs6fpbUaCADQiCCCYJ+O5IpYnHHFBBIJBzHFFT9/miQTAqh8fckPzQQQVNWspsOyQQQDpyTc4IIIAnBBBBBv/Z"
            className="w-hull h-full object-cover object-top"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product?.title}</p>
          <p className="opacity-70">Size: {item?.size} , {item.product?.color}</p>
          <p className="opacity-70 mt-2">Seller: {item.product?.brand}</p>

          <div className="flex space-x-5 items-center  text-gray-900 mt-6">
            <p className="font-semibold">₹{item.product?.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item.product?.price}</p>
            <p className="text-green-600 font-semibold">{item.product?.discountPercent}% Off</p>
          </div>
        </div>

      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                        <RemoveCircleOutlineIcon />
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>

                <IconButton sx={{color:"RGB(145 85 253)"}} onClick={()=>handleUpdateCartItem(1)} >
                        <ControlPointIcon />
                </IconButton>

                
            </div>

            <div>
                <Button onClick={handleRemoveCartItem}  sx={{color:"RGB(145 85 253)"}}>Remove</Button>
            </div>
        </div>
    </div>
  );
};

export default CartItem;
