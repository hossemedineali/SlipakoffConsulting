import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { useState } from "react";
import { trpc } from "@/utils/trpc";

export const formSchema = z.object({
  name: z.string().max(50).min(1, { message: "Your name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().max(30).optional(),
  subject: z.string().max(50).min(1, { message: "Please specifie subject." }),
  message: z.string().max(500).min(1, { message: "Please enter your message" }),
});

export type FormSchema = z.infer<typeof formSchema>;

const Form = () => {
  //const sendMail = trpc.mail.useMutation();
  const [emailIsSent, setEmailIsSent] = useState(false);

  const {
    reset,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setEmailIsSent(false);
    /*  sendMail.mutate({ ...data });

     if (sendMail.status=='success'||sendMail.status=='idle') {
      console.log('success')
      reset()
      setEmailIsSent(true)
    }  */
  });

  return (
    <section className=" flex flex-col md:flex-row bg-gray-900  h-fit min-h-screen">
      <div className=" text-white h-52 w-full md:h-screen md:w-1/4  flex flex-wrap justify-between md:justify-evenly items-center md:flex-col">
        <div className=" h-20  w-1/2 md:w-full flex flex-col items-center md:flex-row md:justify-start md:gap-10 md:pl-2 md:text-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
            />
          </svg>
          <p>United States</p>
        </div>

        <div className=" h-20  w-1/2 md:w-full flex flex-col items-center md:flex-row md:justify-start md:gap-10 md:pl-2 md:text-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p>Riverside, CA 92501</p>
        </div>

        <div className="text-xs h-20  w-1/2 md:w-full flex flex-col items-center md:flex-row md:justify-start md:gap-10 md:pl-2 md:text-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            
            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
          </svg>
          <p>info@slipakoffconsulting.com</p>
        </div>

        <div className=" h-20  w-1/2 md:w-full flex flex-col items-center md:flex-row md:justify-start md:gap-10 md:pl-2 md:text-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />

          </svg>
          <p>Riverside, CA 92501</p>
        </div>



      </div>
      <div className="h-2/3 w-full md:h-full md:w-3/4 mx-auto max-w-screen-md py-8 px-4 lg:py-16">
        <form onSubmit={onSubmit} className="flex  flex-col  space-y-8 ">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium  text-gray-300"
            >
              Your name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className={`focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border   p-2.5 text-sm  shadow-sm  bg-gray-700 text-white placeholder-gray-400 ${
                errors.name ? "border-red-500" : "border-gray-600"
              }   `}
              placeholder="jhon doe"
            />
            {errors.name && (
              <p className="text-red-800">{errors.name.message?.toString()}</p>
            )}
          </div>

          <div className=" flex justify-between gap-3">
            <div className="w-full">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium  text-gray-300"
              >
                Your email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className={`focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border   p-2.5 text-sm  shadow-sm  bg-gray-700 text-white placeholder-gray-400 ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }   `}
                placeholder="name@exemple.com"
              />
              {errors.email && (
                <p className="text-red-800">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium  text-gray-300"
              >
                Your phone
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border   p-2.5 text-sm  shadow-sm border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                placeholder="phone number"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium  text-gray-300"
            >
              Subject
            </label>
            <input
              {...register("subject")}
              type="text"
              id="subject"
              className={`focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border   p-2.5 text-sm  shadow-sm  bg-gray-700 text-white placeholder-gray-400 ${
                errors.subject ? "border-red-500" : "border-gray-600"
              }   `}
              placeholder="Let us know how we can help you"
            />
            {errors.subject && (
              <p className="text-red-800">
                {errors.subject.message?.toString()}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium  text-gray-400"
            >
              Your message
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={6}
              className={`focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border   p-2.5 text-sm  shadow-sm  bg-gray-700 text-white placeholder-gray-400 ${
                errors.message ? "border-red-500" : "border-gray-600"
              }   `}
              placeholder="..."
            ></textarea>
            {errors.message && (
              <p className="text-red-800">
                {errors.message.message?.toString()}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary-700  hover:bg-primary-800  focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 self-center rounded-lg  bg-white py-3 px-5  text-center text-md font-medium  hover:scale-105 focus:outline-none focus:ring-4 active:scale-95 w-36"
          >
            {/* {sendMail.isLoading?'...':'Send message'} */}
            Send message
          </button>
        </form>

        {emailIsSent && (
          <div className="text-center mt-5 text-xl text-green-500">
            <p>Thank you for contacting us</p>
          </div>
        )}

        {/* {sendMail.isError && (
          <div className="text-center mt-5 text-xl text-red-500">
            <p>Sorry! something went wrong , sorry something went wrong please try again</p>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Form;
