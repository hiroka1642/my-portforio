import { addBasePath } from 'next/dist/next-server/lib/router/router'
import classes from './Top.module.css'


export  function Top() {

  const IMAGES=
    [{
      alt: 'アヒル',
      url: 'https://1.bp.blogspot.com/-_0tLdAB6wVs/X7zMVCQ8k7I/AAAAAAABcZ4/BS-S_XwqcdkQJaX4wSVdkLi1dMVjQiInACNcBGAsYHQ/s729/bird_gachou.png' ,
    },
  {
    alt: 'ヤツガシラ',
    url: 'https://2.bp.blogspot.com/-fjk6LSrR1w8/WtRyo5Q5zKI/AAAAAAABLgY/x8T10w-1SUYgschaSld2bBKAJsKyvn8zwCLcBGAs/s800/bird_yatsugashira.png',
  },
  {
    alt: 'ハジロコチドリ',
    url: 'https://1.bp.blogspot.com/-dAbKtN0peiM/WebCJkcokDI/AAAAAAABHmQ/JwuM5pcm_9UpmF7aCm6nUMA71y59-Z8mACLcBGAs/s800/bird_hajiro_kochidori.png',
  },
  {
    alt: 'ヒヨドリ',
    url: 'https://3.bp.blogspot.com/-T0QJXJ7326Y/V0QnYWHCGII/AAAAAAAA630/-x53EM4hGTYpXuPFYFt_KyZ4SHo5kZ--ACLcB/s800/bird_hiyodori.png',
  },
  {
    alt: 'カナリア',
    url: 'https://2.bp.blogspot.com/-eCUXmlkH354/VGLLBhxgYbI/AAAAAAAAotU/SjDb6i_5xgA/s800/bird_canary_kanaria.png',
  },
  {
    alt:'画像',
    url: '../public/vercel.svg',
  }
]
 

  return (

    <div className={classes.top}>
    <h1 className={classes.title}>HIROKA's PORTFOLIO</h1>
    <figure className={classes.figure}>
    {
      IMAGES.map((images)=>{
        return(
          <img key={images.alt} src={images.url} alt={images.alt} className={classes.img} />
        )
      })
    }
    </figure>
    </div>

    

    


  )
}
