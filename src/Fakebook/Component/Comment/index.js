export default function Comment({id, name, content}) {
    return (
        <div className='flex bg-slate-100 mb-4 rounded-md'>
            <div className='w-[66px] mr-4'>
                <img className='w-100 rounded-md' src={`https://i.pravatar.cc/150?img=${name}`} alt="nothing" />
            </div>
            <div className="mb-4">
            <label
              className="block text text-red-600 text-sm font-bold mb-2"
              htmlFor="username"
            >
            {name}
            </label>
            <span>{content}</span>  
          </div>
    </div>
    )
}