import { z } from 'zod';
import { procedure, router } from '../trpc';
import { mailer } from './mailer';
export const appRouter = router({
  mail: procedure
    .input(
      z.object({
        name: z.string().max(50).min(1, { message: "Your name is required" }),
        email: z.string().min(1, { message: "Email is required" }).email({
          message: "Must be a valid email",
        }),
        phone: z.string().max(30).optional(),
        subject: z.string().max(50).min(1, { message: "Please specifie subject." }),
        message: z.string().max(500).min(1, { message: "Please enter your message" }),
      }),
    )
    .mutation(async({ input }) => {
      const emailIsSent=await mailer(input.name,input.email,input.phone,input.subject,input.message)
      
      return {
        data:emailIsSent
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;