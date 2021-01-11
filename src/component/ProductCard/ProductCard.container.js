import { connect } from 'react-redux';
import { Subscribe } from 'unstated';

import ProductCard from 'SourceComponent/ProductCard/ProductCard.component';
import {
    mapDispatchToProps,
    mapStateToProps,
    ProductCardContainer as SourceProductCardContainer
} from 'SourceComponent/ProductCard/ProductCard.container';
import SharedTransitionContainer from 'SourceComponent/SharedTransition/SharedTransition.unstated';

/** @namespace ScandipwaTheme/Component/ProductCard/Container/ProductCardContainer */
export class ProductCardContainer extends SourceProductCardContainer {
    _getAvailableVisualOptions() {
        const { product: { configurable_options = {} } } = this.props;

        if (Object.keys(configurable_options).length === 0) {
            return [];
        }

        const { attribute_options = {} } = Object.values(configurable_options)[0];

        return Object.values(attribute_options).reduce(
            (acc, option) => {
                const {
                    swatch_data,
                    label
                } = option;

                const { type, value } = swatch_data || {};

                if (type && value) {
                    acc.push({ value, label, type });
                }

                return acc;
            },
            []
        );
    }

    render() {
        return (
            <Subscribe to={ [SharedTransitionContainer] }>
                { ({ registerSharedElement }) => (
                    <ProductCard
                      // eslint-disable-next-line @scandipwa/scandipwa-guidelines/jsx-no-props-destruction
                      { ...{ ...this.props, registerSharedElement } }
                      { ...this.containerFunctions }
                      { ...this.containerProps() }
                    />
                ) }
            </Subscribe>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);
