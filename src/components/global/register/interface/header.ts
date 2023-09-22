interface Box {
    title: string;
    info: string
}
export default interface Header {
    sign: Box,
    login: Box,
    resetPassword: Box,
    confirmationCode: Box,
    newPassword: Box,
}