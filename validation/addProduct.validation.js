
const yup = require('yup');

// Allowed fields that the client can send
const allowedProductFields = [
    'name',
    'description',
    'image',
    'category',
    'price'
];

// Shared field schemas
const productFields = {
    name: yup.string()
        .trim()
        .min(3, 'Product name must be at least 3 characters')
        .max(15, 'Product name cannot exceed 15 characters'),

    description: yup.string()
        .trim()
        .min(3, 'Product description must be at least 3 characters'),

    image: yup.string()
        .trim(),

    category: yup.string()
        .trim()
        .oneOf( // user can be  chose at least one 
            ['Clothes', 'Fashion', 'Electronics', 'Sports'],
            'Invalid product category'
        ),

    price: yup.number()
        .typeError('Product price must be a number')
        .positive('Product price must be greater than zero')
};

// Custom validation: reject fields not defined in the allowed list
const unknownFieldsValidation = yup.object().test(
    'no-unknown-fields',
    'Request contains unsupported fields',
    value => {
        if (!value) return true;

        return Object.keys(value).every(field =>
            allowedProductFields.includes(field)
        );
    }
);

// Custom validation: require at least one allowed field in update
const atLeastOneFieldValidation = yup.object().test(
    'at-least-one-field',
    'At least one field is required for update',
    value => {
        if (!value) return false;

        return Object.keys(value).some(field =>
            allowedProductFields.includes(field)
        );
    },
    {
        strict: false, // allow yup default parsing 
        abortEarly: false, // collect all error in one message
        stripUnknown: false
    }
);

// Add Product Schema
const addProductSchema = yup.object({
    name: productFields.name.required(
        'Product name is required'
    ),

    description: productFields.description.required(
        'Product description is required'
    ),

    image: productFields.image.optional(),

    category: productFields.category.optional(),

    price: productFields.price.required(
        'Product price is required'
    )
})
    .concat(unknownFieldsValidation);

// Update Product Schema
const updateProductSchema = yup.object({
    name: productFields.name.optional(),

    description: productFields.description.optional(),

    image: productFields.image.optional(),

    category: productFields.category.optional(),

    price: productFields.price.optional()
})
    .concat(unknownFieldsValidation)
    .concat(atLeastOneFieldValidation);

module.exports = {
    addProductSchema,
    updateProductSchema
};