import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GoogleProvider({
            clientId: "256561352306-d48la4ebi27s17bkqdmti82bop87mjl8.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
}
