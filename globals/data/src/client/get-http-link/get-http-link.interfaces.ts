import { HttpLink } from '@apollo/client'

export type GetHttpLink = (cookie: Record<string, any>) => HttpLink
