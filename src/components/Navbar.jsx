function Navbar() {
  return (
    <div className="w-full py-5 px-10 flex items-center justify-end">
        <div className="w-[250px] flex items-center justify-between">
            <button className="bg-[#000000] text-[#ffffff] w-[100px] h-[50px] rounded-xl">
                Login
            </button>
            <button className="bg-[#ffffff] text-[#000000] w-[100px] h-[50px] rounded-xl border-black border-2">
                Sign Up
            </button>
        </div>
    </div>
  )
}

export default Navbar