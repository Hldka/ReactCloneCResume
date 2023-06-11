import React from 'react'
import {TfiFacebook,TfiTwitter,TfiYoutube,TfiLinkedin,TfiGithub} from "react-icons/tfi"
import "./social.icons.css"
const SocialIcons = () => {
  return (
    <div class="social-icons">
    <ul>
        <li><a href="# about" ><TfiFacebook/></a></li>
        <li><a href="# twitter" ><TfiTwitter/></a></li>
        <li><a href="# youtube"><TfiYoutube/></a></li>
        <li><a href="# linkendn"><TfiLinkedin/></a></li>
        <li><a href="# github"><TfiGithub/></a></li>
    </ul>
</div>
  )
}

export default SocialIcons 