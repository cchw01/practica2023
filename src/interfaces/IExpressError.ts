export interface IExpressError extends Error {
    status?: number; // the question mark doesn't mean nullable like in .NET, it means it can be missing (not present at all)
}