#Proxy Trigger

An add-on for Mozilla FireFox browser that adds a button to quickly switch proxy settings between "No proxy" and "Manual proxy configuration".

##What

What this extension offers is a button to trigger a single setting called "network.proxy.type" in your FireFox preferences (visible in `about:config`).

##Why

I'm used to running a tunnel from my Apple laptops to my VPS in Amsterdam to bypass limitations set by our stupid government. For most of the cases I'd let my browser connect to internet directly ("No proxy"), but for some sites, such as torrent trackers, I have to establish an SSH tunnel to my remote server, and then set FireFox to use a manually configured socks proxy.

In FireFox it takes a few clicks to get to the Proxy configuratin tab: Settings -> Advanved -> Network -> Settings, pick one, click "Ok". That's six clicks. So I decided to make my first ever FF extension and solve the little issue.

##OS X and SSH

I use plain SSH session to establish a tunnel between my computer and remote server. I've set up an `alias` to only type a short command to get this executed:

```
ssh -ND 5150 myServerConfigName
```

This command establishes a tunnel between local port 5150 (kudos to Peavey guitar amp and Eddie Van Halen!) and a remote machine. Whatever is thrown to that port on my local machine, appears out from the remote.

I use keypair authentication, and in my home directory in `.ssh/config` file there's a section for my server, that looks like this:

```
Host myServerConfigName
    HostName my.cool.remote.server.domainname.com
    Port 12345
    User myusername
```

##Now

So, now, wherever I need to use my tunnel, I run the short aliased command in my Terminal window, and click the buttin in FireFox once to get to a proxied connection.

##How

I just skipped through Mozilla guides on [creating FireFox extensions](https://developer.mozilla.org/en-US/Add-ons). Installed [nodejs](https://nodejs.org) and [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation) and followed the guides on [Preferences](https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/preferences_service) and [Buttons](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Adding_a_Button_to_the_Toolbar).

##TODO

Perhaps this is not the most elegant solution out there. I just feel it fits my needs, and it was fun to create my own FireFox extension.