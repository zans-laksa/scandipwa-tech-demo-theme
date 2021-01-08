import SourceDemoNotice from 'SourceComponent/DemoNotice/DemoNotice.component';

import './DemoNotice.override.style.scss';

// TODO: implement DemoNotice
/** @namespace ScandipwaTheme/Component/DemoNotice/Component/DemoNotice */
// eslint-disable-next-line @scandipwa/scandipwa-guidelines/derived-class-names
export class DemoNotice extends SourceDemoNotice {
    renderText() {
        return __('Demo store is hosted on readymage.com.');
    }

    render() {
        const { isDemoNoticeEnabled } = this.props;

        if (!isDemoNoticeEnabled) {
            return null;
        }

        return (
            <div block="DemoNotice">
                <a href="https://readymage.com/" target="_blank" rel="noreferrer">
                { this.renderText() }
                </a>
            </div>
        );
    }
}

export default DemoNotice;
