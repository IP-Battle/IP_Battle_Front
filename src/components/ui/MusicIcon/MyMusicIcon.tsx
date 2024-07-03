import { MusicalNoteIcon } from '@heroicons/react/16/solid'

const MyMusicIcon = () => {
  return (
    <div className='relative inline-block'>
      <MusicalNoteIcon />
      <div
        className='absolute top-0 left-0 w-full h-full'
        style={{
          background:
            'linear-gradient(to top right, transparent calc(50% - 1px), black, transparent calc(50% + 1px))',
        }}
      ></div>
    </div>
  )
}

export default MyMusicIcon
