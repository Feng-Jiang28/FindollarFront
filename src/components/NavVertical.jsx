import Link from './Link';

function NavVertical({ arr }) {
    return (
        <div className='relative flex z-10 w-1/6 mx-4'>
            <div className='flex flex-col w-full space-y-3 pt-5'>
                {arr.map((row, index) =>
                    <div className="rounded-3xl p-4 hover:bg-[#f7f7f7]">
                        <Link dest={row.dest} key={index} >
                            <span className="mr-1 select-none">{row.icon}</span>{row.label}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavVertical;