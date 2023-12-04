function SearchBar() {

    return (
        <div className="py-3 px-32 bg-[#8E7373] w-full">
            <div className="bg-white flex w-full rounded">
                <div className="bg-gray-100 rounded">
                    <span className="flex h-full items-center px-5">
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.22986 13H5.24514V11H3.22986V13ZM3.22986 17H5.24514V15H3.22986V17ZM3.22986 9H5.24514V7H3.22986V9ZM7.26041 13H21.3674V11H7.26041V13ZM7.26041 17H21.3674V15H7.26041V17ZM7.26041 7V9H21.3674V7H7.26041Z" fill="#808080" />
                    </svg>
                    Category
                    </span>
                </div>
                <div className="grow">
                    <input 
                        className="px-2 w-full h-full"
                        placeholder="Search in Emmable"
                    />
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                        <path d="M0.548645 0H36.8542C39.0633 0 40.8542 1.79086 40.8542 4V36C40.8542 38.2091 39.0633 40 36.8542 40H0.548645V0Z" fill="#5A4098" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.2281 22H23.4321L23.1499 21.73C24.1374 20.59 24.7319 19.11 24.7319 17.5C24.7319 13.91 21.7997 11 18.1823 11C14.5649 11 11.6326 13.91 11.6326 17.5C11.6326 21.09 14.5649 24 18.1823 24C19.8046 24 21.2959 23.41 22.4446 22.43L22.7167 22.71V23.5L27.7549 28.49L29.2562 27L24.2281 22ZM18.1823 22C15.6733 22 13.6479 19.99 13.6479 17.5C13.6479 15.01 15.6733 13 18.1823 13C20.6913 13 22.7167 15.01 22.7167 17.5C22.7167 19.99 20.6913 22 18.1823 22Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchBar