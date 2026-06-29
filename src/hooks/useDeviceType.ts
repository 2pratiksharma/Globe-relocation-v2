import { useState, useEffect } from 'react';

interface DeviceInfo {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    deviceType: 'mobile' | 'tablet' | 'desktop';
}

export function useDeviceType(): DeviceInfo {
    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        deviceType: 'desktop',
    });

    useEffect(() => {
        const detectDevice = () => {
            const userAgent = navigator.userAgent.toLowerCase();

            // Mobile detection patterns
            const mobilePatterns = [
                /android.*mobile/,
                /iphone/,
                /ipod/,
                /blackberry/,
                /windows phone/,
                /opera mini/,
                /mobile/,
            ];

            // Tablet detection patterns
            const tabletPatterns = [
                /ipad/,
                /android(?!.*mobile)/,
                /tablet/,
                /kindle/,
                /silk/,
                /playbook/,
            ];

            const isMobile = mobilePatterns.some(pattern => pattern.test(userAgent));
            const isTablet = !isMobile && tabletPatterns.some(pattern => pattern.test(userAgent));
            const isDesktop = !isMobile && !isTablet;

            let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
            if (isMobile) deviceType = 'mobile';
            else if (isTablet) deviceType = 'tablet';

            setDeviceInfo({
                isMobile,
                isTablet,
                isDesktop,
                deviceType,
            });
        };

        detectDevice();

        // Re-detect on resize (for responsive testing in dev tools)
        window.addEventListener('resize', detectDevice);
        return () => window.removeEventListener('resize', detectDevice);
    }, []);

    return deviceInfo;
}

export default useDeviceType;
