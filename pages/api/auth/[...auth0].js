// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export default handleAuth({
    async login(req, res) {
        await handleLogin(req, res, {
            returnTo: "https://algoshare.vercel.app//problems",
        });
    },
    async logout(req, res) {
        await handleLogout(req, res, {
            returnTo: "https://algoshare.vercel.app//problems"
        })
    }
});