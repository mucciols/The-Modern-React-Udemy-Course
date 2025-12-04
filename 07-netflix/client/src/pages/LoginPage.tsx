import { createContext, useState } from "react";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import { useForm, type SubmitHandler, type UseFormRegister } from "react-hook-form"

export type Inputss = {
  email: string;
  name: string;
  password: string;
}

export enum Variant {
  SIGN_UP,
  LOG_IN
}

interface AuthFormContextType {
  register: UseFormRegister<Inputss> |  null
}

export const AuthFormContext = createContext<AuthFormContextType>({
  register: null
});

export default function LoginPage() {
  const { register , handleSubmit , formState:{ errors }, watch} = useForm<Inputss>()

  const [variant, setVariant] = useState(Variant.LOG_IN)

  const onSubmit: SubmitHandler<Inputss> = (data) => {
    console.log(data)
  }

  return(
    <div className="relative bg-black/50 h-screen w-screen ">
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 p-16 selc-center mt-2 w-full max-w-md rounded-md">
          <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
          <AuthFormContext.Provider value={{
            register
          }}>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              {variant === Variant.SIGN_UP &&  (
                  <Input id="username" type="text" label="Username" name="name" />
              )}
              <Input id="email" type="email" label="Email Address" name="email" />
              <Input id="password" type="password" label="Password" name="password" />
              <input type="submit" 
                className="bg-red-400 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700" />
            </form>
          </AuthFormContext.Provider>
          {
            variant === Variant.LOG_IN ? (
               <p className="text-neutral-500 mt-12" onClick={()=>setVariant(Variant.SIGN_UP)}>
                <span className="text-white ml-1 hover:underline cursor-pointer">
                  First time using Netflix?
                </span>
              </p> 
            ) : (
              <p className="text-neutral-500 mt-12" onClick={()=>setVariant(Variant.LOG_IN)}>
                <span className="text-white ml-1 hover:underline cursor-pointer">
                  Already have an account?
                </span>
              </p> 
            )}
        </div>
      </div>
    </div>
  )
}