import CurrencySwitcher from 'Component/CurrencySwitcher';
import StoreSwitcher from 'Component/StoreSwitcher';
import SourceHeader, { CartOverlay, MyAccountOverlay } from 'SourceComponent/Header/Header.component';

import './Header.override.style.scss';

// TODO: implement Header
/** @namespace ScandipwaTheme/Component/Header/Component/Header */
// eslint-disable-next-line @scandipwa/scandipwa-guidelines/derived-class-names
export class Header extends SourceHeader {
    renderMap = {
        cancel: this.renderCancelButton.bind(this),
        back: this.renderBackButton.bind(this),
        close: this.renderCloseButton.bind(this),
        title: this.renderTitle.bind(this),
        account: this.renderAccount.bind(this),
        minicart: this.renderMinicart.bind(this),
        compare: this.renderComparePageButton.bind(this),
        search: this.renderSearchField.bind(this),
        clear: this.renderClearButton.bind(this),
        edit: this.renderEditButton.bind(this),
        ok: this.renderOkButton.bind(this)
    };

    renderTopMenu() {
        const { device } = this.props;
        if (device.isMobile) {
            return null;
        }

        return (
            <div block="Header" elem="TopMenu">
                <div block="Header" elem="Contacts">
                    { this.renderContacts() }
                </div>
                { this.renderLogo() }
                <div block="Header" elem="Switcher">
                    <CurrencySwitcher />
                    <StoreSwitcher />
                </div>
            </div>
        );
    }
}

export { CartOverlay, MyAccountOverlay };
export default Header;
