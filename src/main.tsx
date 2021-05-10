import { render } from 'preact'
import { App } from './app'
import './index.css'
import './telemetry'

render(<App />, document.getElementById('app')!)
