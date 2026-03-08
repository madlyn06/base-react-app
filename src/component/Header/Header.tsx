import anime from '../../../public/anime.svg'
import hightlight from '../../../public/hightlight.svg'
import media from '../../../public/media.svg'
import reels from '../../../public/reels.svg'
import tip from '../../../public/tip.svg'
import story from '../../../public/story.svg'

const menu1 = [
  {
    name: 'lịch trực tiếp'
  },
  {
    name: 'lịch thi đấu'
  },
  {
    name: 'tỷ lệ kèo'
  },
  {
    name: 'kết quả'
  },
  {
    name: 'phòng chat'
  },
  {
    name: 'tin tức'
  }
]

const menu2 = [
  {
    name: 'Bảng Tin',
    image: story
  },
  {
    name: 'Reels',
    image: reels
  },
  {
    name: 'Highlight',
    image: hightlight
  },
  {
    name: 'Tip Kèo',
    image: tip
  },
  {
    name: 'Phim ảnh',
    image: media
  },
  {
    name: 'Truyện tranh',
    image: anime
  }
]
export default function Header() {
  return (
    <div className='flex w-full'>
      <div className='bg-black inline-block'>
        <p className='text-white text-'>LOGO</p>
      </div>
      <div className='w-full'>
        <div className='bg-[#EBC770] flex py-2.5'>
          <ul className='flex uppercase gap-12'>
            {menu1.map((item, index) => (
              <li
                key={index}
                className='py-2.5 px-2.5 hover:bg-[#5C5C5C] hover:text-[#F8E889] rounded-[20px] cursor-pointer'
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className='flex uppercase gap-2.5'>
            <button className='uppercase font-medium rounded-[20px] w-[137px] py-2.5 bg-white'>đăng ký</button>
            <button className='uppercase font-medium rounded-[20px] w-[137px] bg-black text-[#E4B764]'>
              đăng nhập
            </button>
          </div>
        </div>
        <div className='bg-black flex py-2.5'>
          <ul className='flex gap-8'>
            {menu2.map((item, index) => (
              <li
                key={index}
                className='py-[5px] px-2.5 text-[#F8E889] flex gap-[5px]'
              >
                <img src={item.image} alt={item.name} className='w-[30px] h-[30px]' />
                {item.name}
              </li>
            ))}
          </ul>
          <div className='flex uppercase bg-white rounded-[20px] items-center gap-[5px] px-1 font-medium cursor-pointer'>
            <img src='/vietnam.png' alt='vietnam' className='w-7 h-7' />
            tiếng việt
          </div>
          <div className='ml-[89px]'>
            <img src='/light.png' alt='vietnam' className='w-[60px] h-[30px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
