function SignIn() {
  return (
    <div className="w-full h-full">
        <div className="mt-3">
            <h1 className="font-bold text-xl">
                Sign In Student
            </h1>
            <p>You will be redirected to your Dashboard once the <br /> faculty verifies your profile</p>
        </div>
        <div className="mt-3 flex flex-col items-start justify-evenly h-[400px]">
            <form action="" className="flex flex-col items-start h-full">
                <input type="text" placeholder="Enter your email" className="mt-10 border-2 rounded-xl border-black p-3 w-[300px]" />
                <input type="text" placeholder="Enter your password" className="mt-5 border-2 rounded-xl border-black p-3 w-[300px]" />
                <button type="submit" className="mt-10 bg-[#000000] text-[#ffffff] w-[100px] h-[50px] rounded-xl">LOGIN</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn