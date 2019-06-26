import Controller from '@ember/controller'
import { action } from '@ember/object'

type Product = {
  title: string
  price: number
}

export default class ApplicationController extends Controller {}
