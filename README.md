## 01. Product Management

## 1.1 Product Model

### Data Types.

- [x]  Required Fields.
- [x]  Unique Fields.
- [x]  Default Values.
- [x]  Min & Max.
- [x]  Enum.
- [x]  Timestamps.
- [x]  Soft Delete.
- [x]  Select.
- [ ] Category Relationship.
- [ ] SubCategory Relationship.

# 1.2 Product CRUD

- [x]  Create Product.
- [x]  Get All Products.
- [x]  Get one Product.
- [x]  Update Product.
- [x]  Delete Product.
- [x]  Restore Product.
- [x]  Get Deleted Products.

# 1.3 Product Validation

- [x]  Add Product Validation.
- [x]  Update Product Validation.
- [x]  Required Fields Validation.
- [x]  Data Type Validation.
- [x]  String Length Validation.
- [x]  Number Validation.
- [x]  Enum Validation.
- [x]  Custom Validation.
- [x]  Price Validation.
- [ ]  Category ID Validation.
- [ ]  SubCategory ID Validation.
- [ ]  Image Validation.

# 1.4 Error Handling

- [ ]  JavaScript Error.
- [ ]  try/catch.
- [ ]  Error Object.
- [ ] Create a Custom Error Using AppError.
- [ ]  Error Properties.
- [ ]  create Global Error Middleware.
- [ ] Handle Operational Errors.
- [ ] Handle Programming Errors.
- [ ] Handle Validation Errors.
- [ ] Handle Duplicate Key Errors.
- [ ] Handle Cast Errors.
- [ ] Handle MongoDB Errors.
- [ ] Standardize Error Responses.
- [ ]  HTTP Status Codes.

# 1.5 Async Error Handling

## Understanding

- [ ]  Asynchronous Errors.
- [ ]  Promise Rejection.
- [ ] Handle Async/Await Errors.
- [ ] Create the catchAsync Utility.
- [ ] Understand Higher-Order Functions.
- [ ] Pass Errors Using next().
- [ ] Integrate catchAsync with Controllers.
- [ ] Test Async Errors.

# 1.6 Search

## Understanding Search with MongoDB.

- [ ]  Search By Product Name.
- [ ]  Search By Description.
- [ ]  Search By Category.
- [ ]  Search By SubCategory.
- [ ] Search Using Regex.
- [ ]  Case-Insensitive Search.
- [ ] Handle Empty Search Queries.
- [ ] Handle No Results.
- [ ] Search Across Multiple Fields.
- [ ] Search Using Query Parameters.
- [ ] Optimize Search Performance.
- [ ] Understand Indexes and Their Impact on Search.

# 1.7 Filtering

- [ ] Filter by Category.
- [ ] Filter by SubCategory.
- [ ] Filter by Price.
- [ ] Filter by Minimum Price.
- [ ] Filter by Maximum Price.
- [ ] Filter by Availability.
- [ ]  Filtering
- [ ] Handle Query Parameters.
- [ ] Build Dynamic Queries.
- [ ] Handle Invalid Filters.
- [ ] Combine Filtering with Search.
- [ ] Combine Filtering with Pagination.

# 1.8 Sorting

- [ ] Sort by Price (Ascending).
- [ ] Sort by Price (Descending).
- [ ] Sort by CreatedAt.
- [ ] Sort by Name.
- [ ] Sort by UpdatedAt.
- [ ] Sort by Multiple Fields.
- [ ] Handle Default Sorting.
- [ ] Handle Invalid Sort Fields.
- [ ] Combine Sorting, Filtering, and Pagination.

# 1.9 Pagination

# Understanding

- [ ]  Pagination.
- [ ]  Skip & Limit.
- [ ] Receive the Page Number.
- [ ] Receive the Limit.
- [ ] Calculate Skip.
- [ ] Calculate Total Documents.
- [ ] Calculate Total Pages.
- [ ] Calculate the Current Page.
- [ ] Calculate the Next Page.
- [ ] Calculate the Previous Page.
- [ ] Handle Invalid Page Numbers.
- [ ] Handle Invalid Limits.
- [ ] Build the Pagination Response.
- [ ] Combine Pagination with Search, Filtering, and Sorting.

  .

## 1.10 Product Testing

- [ ]  Create Product.
- [ ]  Get All Products.
- [ ]  Get Single Product.
- [ ]  Update Product.
- [ ]  Delete Product.
- [ ]  Restore Product.
- [ ]  Invalid Product ID.
- [ ]  Duplicate Product.
- [ ]  Missing Required Fields.
- [ ]  Invalid Data Types.
- [ ]  Invalid Category.
- [ ]  Search Testing.
- [ ]  Filtering Testing.
- [ ]  Sorting Testing.
- [ ]  Pagination Testing.
- [ ]  Error Handling Testing.
- \[ ]

## 02. User Management

### 2.1 User Model

- Review the User Schema.

  User Schema.
- Name.
- Email.
- Password.
- Role.
- IsDeleted.
- IsConfirmed.
- ConfirmOTP.
- OTPDate.
- ResetToken.
- ResetDate.
- Required Fields.
- Unique Fields.
- Default Values.
- Enum.
- Timestamps.
- Select.
- Review User Schema Security.

  User Schema Security.

### 2.2 User Validation

- Add User Validation.
- Update User Validation.
- Name Validation.
- Email Validation.
- Password Validation.
- Required Fields Validation.
- Data Type Validation.
- String Length Validation.
- Email Format Validation.
- Password Strength Validation.
- Custom Validation.
- Prevent Sensitive Fields from Being Updated Through the User Update Endpoint.

  User Update.

### 2.3 User CRUD

- Create User.
- Get All Users.
- Get Single User.
- Update User.
- Delete User.
- Restore User.
- Get Deleted Users.

### 2.4 User Features

- Search User By Name.
- Search User By Email.
- Filtering By Role.
- Filtering By Status.
- Sorting.
- Pagination.
- Get User Profile.
- Update User Profile.

### 2.5 User Error Handling

- User Not Found.
- Duplicate Email.
- Duplicate Name

  when needed.
- Invalid User ID.
- Validation Errors.
- Unauthorized User Operations.
- Standardize User Error Responses.

  User Error Responses.

### 2.6 User Testing

- Create User.
- Duplicate Email.
- Invalid Email.
- Invalid Password.
- Missing Required Fields.
- Update User.
- Delete User.
- Restore User.
- Get User.
- Search User.
- Filtering.
- Pagination.

## 03. Category Management

### 3.1 Category Model

- Category Name.
- Description.
- Image.
- Slug.
- IsDeleted.
- Timestamps.
- Required Fields.
- Unique Fields.
- Default Values.
- Review the Relationship with Product and SubCategory.

  SubCategory.

### 3.2 Category Validation

- Add Category Validation.
- Update Category Validation.
- Name Validation.
- Description Validation.
- Slug Validation.
- Image Validation.
- Required Fields Validation.
- String Length Validation.
- Custom Validation.

### 3.3 Category CRUD

- Create Category.
- Get All Categories.
- Get Single Category.
- Update Category.
- Delete Category.
- Restore Category.
- Get Deleted Categories.

### 3.4 Category Features

- Search Category.
- Search By Name.
- Search By Slug.
- Filtering.
- Sorting.
- Pagination.
- Get Products By Category.
- Get SubCategories By Category.
- Check Category Products Before Deletion.

### 3.5 Category Error Handling

- Category Not Found.
- Duplicate Category.
- Invalid Category ID.
- Category Has Products.
- Category Has SubCategories.
- Validation Errors.

### 3.6 Category Testing

- Create Category.
- Duplicate Category.
- Invalid Category.
- Update Category.
- Delete Category.
- Restore Category.
- Get All Categories.
- Search Category.
- Filtering.
- Sorting.
- Pagination.
- Get Products By Category.

## 04. SubCategory Management

### 4.1 SubCategory Model

- SubCategory Name.
- Description.
- Category Reference.
- Slug.
- Image.
- IsDeleted.
- Timestamps.
- Required Fields.
- Unique Fields.
- Default Values.
- Review the Relationship with Category and Product.

  Product.

### 4.2 SubCategory Validation

- Add SubCategory Validation.
- Update SubCategory Validation.
- Name Validation.
- Description Validation.
- Slug Validation.
- Category ID Validation.
- Image Validation.
- Required Fields Validation.
- Custom Validation.

### 4.3 SubCategory CRUD

- Create SubCategory.
- Get All SubCategories.
- Get Single SubCategory.
- Update SubCategory.
- Delete SubCategory.
- Restore SubCategory.
- Get Deleted SubCategories.

### 4.4 SubCategory Features

- Search SubCategory.
- Search By Name.
- Filtering By Category.
- Sorting.
- Pagination.
- Get SubCategories By Category.
- Get Products By SubCategory.

### 4.5 SubCategory Error Handling

- SubCategory Not Found.
- Duplicate SubCategory.
- Invalid SubCategory ID.
- Category Not Found.
- Category Deleted.
- Validation Errors.

### 4.6 SubCategory Testing

- Create SubCategory.
- Duplicate SubCategory.
- Invalid Category ID.
- Update SubCategory.
- Delete SubCategory.
- Restore SubCategory.
- Search.
- Filtering.
- Sorting.
- Pagination.
- Get Products By SubCategory.

## 05. Cart Management

### 5.1 Cart Model

- Cart Schema.
- User Reference.
- Product Reference.
- Quantity.
- Product Price.
- Total Price.
- Timestamps.
- Review the Relationships Between Cart, User, and Product.

  Product.
- Decide Whether Each User Will Have a Single Cart Document or Whether Another Design Will Be Used.

### 5.2 Cart Validation

- Add To Cart Validation.
- Update Cart Validation.
- Remove From Cart Validation.
- Product ID Validation.
- Quantity Validation.
- Required Fields Validation.
- Number Validation.
- Custom Validation.

### 5.3 Cart Operations

- Create Cart.
- Get User Cart.
- Add Product To Cart.
- Remove Product From Cart.
- Update Product Quantity.
- Clear Cart.
- Remove All Products From Cart.

### 5.4 Cart Business Logic

- Verify that the User Exists.


- Verify that the Product Exists.


- Ensure that the Product Is Not Deleted.
- Ensure that the Product Is Available.
- Prevent Invalid Quantity Values.
- Handle a Product That Already Exists in the Cart.


- Increase the Quantity When the Product Is Added Again.
- Calculate the Product Total.


- Calculate the Cart Total.


- Update the Total After the Quantity Changes.


- Update the Total After a Product Is Removed.


- Handle Product Price Changes.


- Handle Deleted Products.

### 5.5 Cart Features

- Get Cart Products.
- Populate Product Data.
- Calculate Subtotal.
- Calculate Cart Total.
- Get Cart Items Count.
- Check Cart Availability.

### 5.6 Cart Error Handling

- Cart Not Found.
- Product Not Found.
- Product Deleted.
- Invalid Quantity.
- Product Out Of Stock.
- Empty Cart.
- Unauthorized Cart Access.

### 5.7 Cart Testing

- Create Cart.
- Add Product.
- Add Existing Product.
- Remove Product.
- Update Quantity.
- Invalid Quantity.
- Get Cart.
- Clear Cart.
- Calculate Total.
- Empty Cart.

## 06. Order Management

### 6.1 Order Model

- Order Schema.
- User Reference.
- Products.
- Product Reference.
- Quantity.
- Product Price.
- Total Price.
- Shipping Address.
- Payment Method.
- Payment Status.
- Order Status.
- Order Number.
- Timestamps.
- Review the Relationships Between Order, User, Product, and Cart.



### 6.2 Order Validation

- Create Order Validation.
- Update Order Validation.
- Shipping Address Validation.
- Payment Method Validation.
- Product Validation.
- Quantity Validation.
- Order Status Validation.
- Required Fields Validation.
- Custom Validation.

### 6.3 Order Operations

- Create Order.
- Get All Orders.
- Get User Orders.
- Get Single Order.
- Update Order.
- Update Order Status.
- Cancel Order.
- Get Order Details.

### 6.4 Order Business Logic

- Create an Order from the Cart.


- Ensure that the Cart Is Not Empty.
- Verify that the Products Exist.
- Ensure that the Products Are Available.
- Validate Product Quantities.
- Calculate the Order Total.
- Store the Product Price at the Time of the Order.
- Store Shipping Information.
- Associate the Order with the User.
- Update the Cart After Order Creation.
- Handle Order Cancellation.
- Update the Order Status.
- Prevent Invalid Transitions Between Order Statuses.
- Handle Stock When an Order Is Created or Cancelled.

### 6.5 Order Status Management

- Pending.
- Confirmed.
- Processing.
- Shipped.
- Delivered.
- Cancelled.
- Define the Allowed Status Transitions.
- Prevent Unauthorized Status Changes.

### 6.6 Order Features

- Search Orders.
- Filtering By Status.
- Filtering By Payment Status.
- Filtering By Date.
- Filtering By User.
- Sorting.
- Pagination.
- Get Orders By User.
- Get Orders By Status.

### 6.7 Order Error Handling

- Order Not Found.
- Cart Empty.
- Product Not Found.
- Product Out Of Stock.
- Invalid Order Status.
- Order Already Cancelled.
- Unauthorized Order Access.
- Invalid Order Operation.

### 6.8 Order Testing

- Create Order.
- Create Order With Empty Cart.
- Invalid Product.
- Invalid Quantity.
- Get All Orders.
- Get User Orders.
- Get Single Order.
- Update Order Status.
- Cancel Order.
- Search Orders.
- Filtering.
- Sorting.
- Pagination.

## 07. DynamicPage Management

### 7.1 DynamicPage Model

- Title.
- Slug.
- Content.
- Description.
- Status.
- IsPublished.
- Timestamps.
- Required Fields.
- Unique Fields.
- Default Values.

### 7.2 DynamicPage Validation

- Add Page Validation.
- Update Page Validation.
- Title Validation.
- Slug Validation.
- Content Validation.
- Description Validation.
- Status Validation.
- Required Fields Validation.
- Custom Validation.

### 7.3 DynamicPage CRUD

- Create Page.
- Get All Pages.
- Get Single Page.
- Update Page.
- Delete Page.
- Restore Page.

### 7.4 DynamicPage Features

- Search Page.
- Search By Title.
- Search By Slug.
- Filtering By Status.
- Filtering By Published.
- Sorting.
- Pagination.
- Publish Page.
- Unpublish Page.
- Get Published Pages.
- Get Page By Slug.

### 7.5 DynamicPage Error Handling

- Page Not Found.
- Duplicate Slug.
- Invalid Page ID.
- Page Not Published.
- Validation Errors.

### 7.6 DynamicPage Testing

- Create Page.
- Duplicate Slug.
- Update Page.
- Delete Page.
- Restore Page.
- Publish Page.
- Unpublish Page.
- Get Published Pages.
- Search.
- Filtering.
- Pagination.

## 08. Testimonial Management

### 8.1 Testimonial Model

- User Reference.
- Name.
- Message.
- Rating.
- Image.
- Status.
- IsApproved.
- Timestamps.
- Required Fields.
- Default Values.
- Enum.

### 8.2 Testimonial Validation

- Add Testimonial Validation.
- Update Testimonial Validation.
- Name Validation.
- Message Validation.
- Rating Validation.
- Image Validation.
- Status Validation.
- Required Fields Validation.
- Custom Validation.

### 8.3 Testimonial CRUD

- Create Testimonial.
- Get All Testimonials.
- Get Single Testimonial.
- Update Testimonial.
- Delete Testimonial.
- Restore Testimonial.

### 8.4 Testimonial Features

- Search Testimonial.
- Filtering By Rating.
- Filtering By Status.
- Filtering By Approval.
- Sorting.
- Pagination.
- Approve Testimonial.
- Reject Testimonial.
- Get Approved Testimonials.
- Get Testimonials By User.

### 8.5 Testimonial Error Handling

- Testimonial Not Found.
- Invalid Rating.
- Invalid Testimonial ID.
- Unauthorized Operation.
- Validation Errors.

### 8.6 Testimonial Testing

- Create Testimonial.
- Invalid Rating.
- Update Testimonial.
- Delete Testimonial.
- Approve Testimonial.
- Reject Testimonial.
- Get Approved Testimonials.
- Search.
- Filtering.
- Pagination.

## 09. Authentication

### 9.1 Password Hashing

- Understand Password Hashing.


- Install bcrypt.


- Hash Password.
- Compare Password.
- Salt Rounds.
- Store the Password Hash.


- Never Return the Password in the Response.



### 9.2 Register

- Register Validation.
- Receive User Data.
- Ensure that the Email Does Not Already Exist.
- Hash Password.
- Create the User.


- Set the Default Role.


- Send the Confirmation OTP.


- Return the Registration Response.



### 9.3 Login

- Login Validation.
- Receive the Email and Password.


- Find the User.
- Verify the Password.


- Check the IsDeleted Status.


- Check the IsConfirmed Status.


- Generate a JWT.


- Return User Data.
- Handle Invalid Credentials.



### 9.4 JWT

- Understanding JWT.
- JWT Structure.
- Header.
- Payload.
- Signature.
- JWT Secret.
- Sign Token.
- Verify Token.
- Token Expiration.
- Access Token.
- Handle Invalid Tokens.

  Invalid Token.
- Handle Expired Tokens.



### 9.5 Authentication Middleware

- Extract the Token from the Request.


- Check Whether a Token Is Present.


- Verify the Token.


- Extract the User ID.


- Retrieve the User from the Database.


- Check the User's Status.


- Attach the User to req.user.


- Pass the Request to the Next Middleware.


- Handle Unauthorized Requests.



### 9.6 Logout

- Logout Endpoint.
- Handle the Token.


- Token Invalidation


- Logout Response.

### 9.7 OTP Verification

- Generate OTP.
- OTP Storage.
- OTP Expiration.
- Send the OTP Using Nodemailer.


- Verify OTP.
- Confirm User Account.
- Resend OTP.
- Prevent OTP Reuse.


- Handle Expired OTPs.


- Handle Invalid OTPs.



### 9.8 Password Reset

- Forgot Password.
- Forgot Password Validation.
- Generate Reset Token.
- Reset Token Expiration.
- Send a Reset Link or OTP.

  OTP.

- Reset Password.
- Hash New Password.
- Invalidate the Reset Token.


- Handle Invalid Reset Tokens.


- Handle Expired Reset Tokens.



### 9.9 Social Login

**Google Authentication**

- Configure Google OAuth.


- Create Google Credentials.


- OAuth Redirect.
- Receive the User Profile.


- Verify the User's Identity.
- Find the Existing Account.
- Create a New Account When Needed.
- Link Accounts When Needed.
- Issue a JWT.

  JWT.



- Configure the Facebook App.


- Create Facebook Credentials.


- OAuth Redirect.
- Receive the User Profile.


- Verify the User's Identity.
- Find the Existing Account.
- Create a New Account When Needed.
- Issue a JWT.

  JWT.

### 9.10 Authentication Testing

- Register.
- Duplicate Email.
- Login.
- Invalid Password.
- Invalid Email.
- Missing Token.
- Invalid Token.
- Expired Token.
- Logout.
- Verify OTP.
- Invalid OTP.
- Expired OTP.
- Resend OTP.
- Forgot Password.
- Reset Password.
- Social Login.

## 10. Authorization

### 10.1 Roles Management

- Understanding Roles.
- User Role.
- Admin Role.
- Super Admin Role.
- Default Role.
- Role Enum.
- Define the Permissions for Each Role.

  Role.



- View Products.
- Search Products.
- Manage Own Cart.
- Create Own Orders.
- View Own Orders.
- Update Own Profile.
- Create Testimonial.

### 10.3 Admin Permissions

- Manage Products.
- Manage Categories.
- Manage SubCategories.
- Manage Orders.
- Manage Users

  according to the granted permissions.
- Manage Testimonials.
- Manage Dynamic Pages.

### 10.4 Super Admin Permissions

- Manage Admins.
- Manage Users.
- Manage Roles.
- Manage Permissions.
- Manage System Settings.
- Access High-Level Administrative Functions.

### 10.5 Authorization Middleware

- Read the User Role.


- Define the Required Role.


- Create the Restrict To Middleware.


- Verify the Role.


- Allow Access.
- Deny Access.
- Handle Forbidden Requests.


- Protect Admin Routes.


- Protect Super Admin Routes.



### 10.6 Resource Ownership

- Verify Cart Ownership.


- Verify Order Ownership.


- Verify User Profile Ownership.


- Prevent Users from Accessing Other Users' Data.
- Separate Owner Permissions from Admin Permissions.



### 10.7 Authorization Testing

- User Access.
- Admin Access.
- Super Admin Access.
- Unauthorized Access.
- Forbidden Access.
- Resource Ownership.
- Role Restrictions.

## 11. File Upload

### 11.1 Multer

- Understanding Multer.
- Installing Multer.
- Disk Storage.
- Memory Storage.
- Single File Upload.
- Multiple Files Upload.
- File Filter.
- File Size Limits.
- File Extensions.
- File MIME Types.

### 11.2 Cloudinary

- Create Cloudinary Account.
- Install Cloudinary.
- Configure Cloudinary.
- Environment Variables.
- Connect Cloudinary.
- Upload Image.
- Upload Multiple Images.
- Delete Image.
- Update Image.
- Handle Upload Errors.



### 11.3 File Upload Utilities

- Create an Upload Utility.


- Stream Upload.
- Handle Buffers.


- Organize Upload Folders.


- Define the Resource Type.


- Manage Image URLs.


- Manage Public IDs.



### 11.4 Integration

- Product Image Upload.
- User Profile Image.
- Category Image.
- SubCategory Image.
- Testimonial Image.
- Multiple Product Images.

### 11.5 File Management

- Replace Old Image.
- Delete Old Image.
- Delete Image From Cloudinary.
- Handle Unused Files.
- Handle Database Failures After Uploading a File.



### 11.6 File Upload Testing

- Upload Valid Image.
- Upload Invalid File.
- Upload Large File.
- Upload Multiple Images.
- Update Image.
- Delete Image.
- Cloudinary Failure.

## 12. Security

### 12.1 Password Security

- Password Hashing.
- Password Strength.
- Password Reset Security.
- Never Return the Password.


- Protect Password Fields.



### 12.2 JWT Security

- Protect the JWT Secret.


- Token Expiration.
- Token Verification.
- Handle Invalid Tokens.


- Handle Expired Tokens.


- Choose a Secure Method for Storing and Sending Tokens.



### 12.3 API Security

- Helmet.
- CORS.
- Rate Limiting.
- Request Size Limits.
- HTTP Security Headers.
- API Access Control.
- Login Rate Limiting.

### 12.4 Input Security

- Request Validation.
- Sanitization

  when needed.
- Prevent Mass Assignment.

  Mass Assignment.
- Protect MongoDB Queries.


- Never Trust User Input Without Validation.

### 12.5 Authorization Security

- Protected Routes.
- Role-Based Access.
- Resource Ownership.
- Prevent Privilege Escalation.


- Protect Admin APIs.


- Protect Super Admin APIs.



### 12.6 Environment Security

- Protect the .env File.


- Never Commit Secrets to GitHub.


- Environment Variables.
- Production Configuration.
- Dependency Security.
- Update Dependencies.



### 12.7 Security Testing

- Unauthorized Requests.
- Invalid Tokens.
- Invalid Roles.
- Brute Force Attempts.
- Invalid Inputs.
- MongoDB Injection Attempts.
- Mass Assignment Attempts.
- File Upload Attacks.

## 13. Testing

### 13.1 Testing Fundamentals

- Understanding Software Testing.
- Unit Testing.
- Integration Testing.
- API Testing.
- End-to-End Testing.
- Positive Testing.
- Negative Testing.

### 13.2 Testing Tools

- Postman.
- Jest or Vitest.
- Supertest.
- Test Database.
- Environment Configuration.

### 13.3 Unit Testing

- Utility Functions.
- Validation Functions.
- Error Handling.
- Authentication Functions.
- Business Logic.
- Price Calculation.
- Cart Calculations.

### 13.4 Integration Testing

- User + Database.
- Product + Database.
- Validation + Controllers.
- Controllers + Error Middleware.
- Register + JWT.
- Authentication + Authorization.
- Cart + Product.
- Order + Cart.
- Cloudinary + Product.

### 13.5 API Testing

- Product APIs.
- User APIs.
- Category APIs.
- SubCategory APIs.
- Cart APIs.
- Order APIs.
- DynamicPage APIs.
- Testimonial APIs.
- Authentication APIs.
- Authorization APIs.

### 13.6 Error Testing

- Invalid Request.
- Missing Fields.
- Invalid ID.
- Duplicate Data.
- Database Errors.
- Unauthorized Access.
- Forbidden Access.
- Not Found.
- Internal Server Errors.

### 13.7 Performance Testing

- Response Time.
- Database Query Performance.
- Pagination Performance.
- Search Performance.
- Load Testing

  when needed.