# MeridianFix
Meridian is an iOS 10.x Jailbreak for all 64-bit devices.

MeridianFix is a compilation of builds of Meridian with an updated bootstrap.

- Uses Cydia Substrate instead of Substitute for tweak injection and compatibility (substrate build only)
- Installs Zebra v1.1.36 instead of Cydia on initial installation
- Fixes bootstrap issues with vanilla Meridian (mostly)

App version (ipa): https://github.com/LukeZGD/MeridianFix/releases

Web version (TNS): https://lukezgd.github.io/MeridianFix

## Notes
- For iOS 10.3.2-10.3.3, use the **substrate** build of the web or app version.
- For iOS 10.0-10.3.1, use the **substitute** build of the web or app version.
    - The substrate build does not work properly below 10.3.2, so substitute build is provided for these versions.
- If your device is not an A10(X) device (iPhone 7, 7 Plus, or A10X iPad Pros), it is recommended to **not** use MeridianFix.
    - Use [TNS Sockport](https://lukezgd.github.io/tns-sockport) instead.

## Known Issues
- Tweaks like FlipControlCenter and potentially other tweaks not working
    - Compatibility may vary between substitute and substrate builds, substrate should have better compatibility
    - No fix/workaround at this time

## For previously jailbroken devices
If your device was previously jailbroken with Meridian (or other jailbreak tools) and would like to switch to MeridianFix, you may try to do the following steps:

- Note: Replace `mount_apfs` with `mount_hfs` on iOS 10.0-10.2.1
- WARNING: There is a chance for your device to bootloop after doing this procedure. Proceed at your own risk
- A safer version of this is to remove the folders `/Applications/Cydia.app` and `/meridian` while jailbroken, using Filza, SSH, or other jailbroken methods.
- Even better to just dump blobs using [Legacy iOS Kit](https://github.com/LukeZGD/Legacy-iOS-Kit) and restore using [turdus merula](https://sep.lol) instead.

1. Run [Legacy iOS Kit](https://github.com/LukeZGD/Legacy-iOS-Kit), go to Useful Utilities -> SSH Ramdisk
1. Follow instructions. Once in the SSH Ramdisk, select Connect to SSH
1. Run the following commands:
```
/sbin/mount_apfs /dev/disk0s1s1 /mnt1
rm -rf /mnt1/Applications/Cydia.app /mnt1/meridian
sync
/sbin/umount /mnt1
sync
exit
```
4. Select Reboot Device
5. Once device reboots, jailbreak with MeridianFix instead

## Building

Clone repo, open Xcode project, target your device (or generic), and **make sure ldid is in $PATH**. /usr/local/bin, /usr/bin, /bin, ~/bin, whatever, make sure it's present. You'll also need tar, but I'd like to assume everyone has that already ;)
