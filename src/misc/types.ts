import { MessengerTypes } from 'messaging-api-messenger'
import * as bp from '.botpress'

export type InstagramPayload = {
  object: string
  entry: InstagramEntry[]
}

export type InstagramEntry = {
  id: string
  time: number
  messaging: InstagramMessage[]
  changes?: InstagramChange[]
}

export type InstagramMessage = {
  sender: { id: string }
  recipient: { id: string }
  timestamp: number
  message?: {
    mid: string
    text: string
    quick_reply?: { payload: string }
    attachments?: { type: string; payload: { url: string } }[]
  }
  postback?: {
    mid: string
    payload: string
    title: string
  }
}
export type InstagramChange = {
  field: string
  value: InstagramCommentValue
}

export type InstagramCommentValue = {
  text: string
  from: {
    id: string  
    name: string
  }
}

export type IntegrationLogger = bp.Logger
export type InstagramUserProfile = MessengerTypes.User & { username: string }

export type Carousel = bp.channels.channel.carousel.Carousel
export type Card = bp.channels.channel.card.Card
export type Choice = bp.channels.channel.choice.Choice
export type Dropdown = bp.channels.channel.dropdown.Dropdown
export type Location = bp.channels.channel.location.Location

export type InstagramAttachment = InstagramPostbackAttachment | InstagramSayAttachment | InstagramUrlAttachment

type InstagramPostbackAttachment = {
  type: 'postback'
  title: string
  payload: string
}

type InstagramSayAttachment = {
  type: 'postback'
  title: string
  payload: string
}

type InstagramUrlAttachment = {
  type: 'web_url'
  title: string
  url: string
}