/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

/** The AboutItem type */
export type AboutItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'AboutItem'
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    aboutItemId: Scalars['Int']['output']
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для контента&quot; was set to Show in GraphQL. */
    contentAddons?: Maybe<AboutItem_Contentaddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the about_fragments object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the AboutItem type and the AboutItem type */
    preview?: Maybe<AboutItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the AboutItem */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the AboutItem type and the TermNode type */
    terms?: Maybe<AboutItemToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<AboutItem>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<AboutItem>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The AboutItem type */
export type AboutItemContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The AboutItem type */
export type AboutItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The AboutItem type */
export type AboutItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The AboutItem type */
export type AboutItemTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AboutItemToTermNodeConnectionWhereArgs>
}

/** The AboutItem type */
export type AboutItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The AboutItem type */
export type AboutItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum AboutItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the AboutItem type and the AboutItem type */
export type AboutItemToPreviewConnectionEdge = {
  __typename?: 'AboutItemToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<AboutItem>
}

/** Connection between the AboutItem type and the TermNode type */
export type AboutItemToTermNodeConnection = {
  __typename?: 'AboutItemToTermNodeConnection'
  /** Edges for the AboutItemToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<AboutItemToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type AboutItemToTermNodeConnectionEdge = {
  __typename?: 'AboutItemToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the AboutItemToTermNodeConnection connection */
export type AboutItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type AboutItem_Contentaddons = AcfFieldGroup & {
  __typename?: 'AboutItem_Contentaddons'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  order?: Maybe<Scalars['Float']['output']>
  role?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** A Field Group registered by ACF */
export type AcfFieldGroup = {
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** ACF Link field */
export type AcfLink = {
  __typename?: 'AcfLink'
  /** The target of the link (_blank, etc) */
  target?: Maybe<Scalars['String']['output']>
  /** The title of the link */
  title?: Maybe<Scalars['String']['output']>
  /** The url of the link */
  url?: Maybe<Scalars['String']['output']>
}

/** Address 2 */
export type Address2Field = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'Address2Field'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<Address2FieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Mask */
    customMask?: Maybe<Scalars['String']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<Address2FieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<Address2FieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<Address2FieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Input Mask */
    mask?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type Address2FieldClasses = {
  __typename?: 'Address2FieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type Address2FieldDescription = {
  __typename?: 'Address2FieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type Address2FieldHelp = {
  __typename?: 'Address2FieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type Address2FieldInputLimitSet = {
  __typename?: 'Address2FieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** Address */
export type AddressField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'AddressField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<AddressFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Mask */
    customMask?: Maybe<Scalars['String']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<AddressFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<AddressFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<AddressFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Input Mask */
    mask?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type AddressFieldClasses = {
  __typename?: 'AddressFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type AddressFieldDescription = {
  __typename?: 'AddressFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type AddressFieldHelp = {
  __typename?: 'AddressFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type AddressFieldInputLimitSet = {
  __typename?: 'AddressFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar'
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']['output']>
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']['output']>
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']['output']>
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']['output']>
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']['output']>
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']['output']>
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']['output']>
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']['output']>
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']['output']>
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']['output']>
}

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X',
}

/** Button */
export type ButtonField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ButtonField'
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Key of the field */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** The category type */
export type Category = DatabaseIdentifier &
  HierarchicalTermNode &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'Category'
    /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<CategoryToAncestorsCategoryConnection>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    categoryId?: Maybe<Scalars['Int']['output']>
    /** Connection between the category type and the category type */
    children?: Maybe<CategoryToCategoryConnection>
    /** Connection between the category type and the ContentNode type */
    contentNodes?: Maybe<CategoryToContentNodeConnection>
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** The description of the object */
    description?: Maybe<Scalars['String']['output']>
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
    /** The unique resource identifier path */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** List available translations for this post */
    language?: Maybe<Language>
    /** The link to the term */
    link?: Maybe<Scalars['String']['output']>
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']['output']>
    /** Connection between the category type and the category type */
    parent?: Maybe<CategoryToParentCategoryConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the category type and the post type */
    posts?: Maybe<CategoryToPostConnection>
    /** The Yoast SEO data of the Рубрики taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the category type and the Taxonomy type */
    taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<Category>
    /** List all translated versions of this term */
    translations?: Maybe<Array<Maybe<Category>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The category type */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The category type */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoryToCategoryConnectionWhereArgs>
}

/** The category type */
export type CategoryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoryToContentNodeConnectionWhereArgs>
}

/** The category type */
export type CategoryEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The category type */
export type CategoryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoryToPostConnectionWhereArgs>
}

/** The category type */
export type CategoryTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the category type and the category type */
export type CategoryToAncestorsCategoryConnection = {
  __typename?: 'CategoryToAncestorsCategoryConnection'
  /** Edges for the CategoryToAncestorsCategoryConnection connection */
  edges?: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Category>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Category>
}

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
  __typename?: 'CategoryToCategoryConnection'
  /** Edges for the CategoryToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Category>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
  __typename?: 'CategoryToCategoryConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Category>
}

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the category type and the ContentNode type */
export type CategoryToContentNodeConnection = {
  __typename?: 'CategoryToContentNodeConnection'
  /** Edges for the CategoryToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<CategoryToContentNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = {
  __typename?: 'CategoryToContentNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>
}

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the category type and the category type */
export type CategoryToParentCategoryConnectionEdge = {
  __typename?: 'CategoryToParentCategoryConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Category>
}

/** Connection between the category type and the post type */
export type CategoryToPostConnection = {
  __typename?: 'CategoryToPostConnection'
  /** Edges for the CategoryToPostConnection connection */
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
  __typename?: 'CategoryToPostConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Post>
}

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = {
  __typename?: 'CategoryToTaxonomyConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Taxonomy>
}

/** Single Checkbox */
export type CheckboxField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'CheckboxField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Checkbox Values */
    checkboxValues?: Maybe<CheckboxFieldCheckboxValues>
    /** Checked Calculation Value */
    checkedCalcValue?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<CheckboxFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    defaultValue?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<CheckboxFieldDescription>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<CheckboxFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Unchecked Calculation Value */
    uncheckedCalcValue?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Checkbox Values */
export type CheckboxFieldCheckboxValues = {
  __typename?: 'CheckboxFieldCheckboxValues'
  /** Checked Value */
  checkedValue?: Maybe<Scalars['String']['output']>
  /** Unchecked Value */
  uncheckedValue?: Maybe<Scalars['String']['output']>
}

/** Custom Class Names */
export type CheckboxFieldClasses = {
  __typename?: 'CheckboxFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type CheckboxFieldDescription = {
  __typename?: 'CheckboxFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type CheckboxFieldHelp = {
  __typename?: 'CheckboxFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** City */
export type CityField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'CityField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<CityFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Mask */
    customMask?: Maybe<Scalars['String']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<CityFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<CityFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<CityFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Input Mask */
    mask?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type CityFieldClasses = {
  __typename?: 'CityFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type CityFieldDescription = {
  __typename?: 'CityFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type CityFieldHelp = {
  __typename?: 'CityFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type CityFieldInputLimitSet = {
  __typename?: 'CityFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** A Comment object */
export type Comment = DatabaseIdentifier &
  Node & {
    __typename?: 'Comment'
    /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
    agent?: Maybe<Scalars['String']['output']>
    /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
    approved?: Maybe<Scalars['Boolean']['output']>
    /** The author of the comment */
    author?: Maybe<CommentToCommenterConnectionEdge>
    /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
    authorIp?: Maybe<Scalars['String']['output']>
    /**
     * ID for the comment, unique among comments.
     * @deprecated Deprecated in favor of databaseId
     */
    commentId?: Maybe<Scalars['Int']['output']>
    /** Connection between the Comment type and the ContentNode type */
    commentedOn?: Maybe<CommentToContentNodeConnectionEdge>
    /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
    content?: Maybe<Scalars['String']['output']>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
    date?: Maybe<Scalars['String']['output']>
    /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier for the comment object */
    id: Scalars['ID']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
    karma?: Maybe<Scalars['Int']['output']>
    /** Connection between the Comment type and the Comment type */
    parent?: Maybe<CommentToParentCommentConnectionEdge>
    /** The database id of the parent comment node or null if it is the root comment */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent comment node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Comment type and the Comment type */
    replies?: Maybe<CommentToCommentConnection>
    /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
    type?: Maybe<Scalars['String']['output']>
  }

/** A Comment object */
export type CommentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A Comment object */
export type CommentParentArgs = {
  where?: InputMaybe<CommentToParentCommentConnectionWhereArgs>
}

/** A Comment object */
export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CommentToCommentConnectionWhereArgs>
}

/** A Comment Author object */
export type CommentAuthor = Commenter &
  Node & {
    __typename?: 'CommentAuthor'
    /** Identifies the primary key from the database. */
    databaseId: Scalars['Int']['output']
    /** The email for the comment author */
    email?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier for the comment author object */
    id: Scalars['ID']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** The name for the comment author. */
    name?: Maybe<Scalars['String']['output']>
    /** The url the comment author. */
    url?: Maybe<Scalars['String']['output']>
  }

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
  __typename?: 'CommentToCommentConnection'
  /** Edges for the CommentToCommentConnection connection */
  edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
  __typename?: 'CommentToCommentConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Comment>
}

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = {
  __typename?: 'CommentToCommenterConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Commenter>
}

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = {
  __typename?: 'CommentToContentNodeConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<ContentNode>
}

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = {
  __typename?: 'CommentToParentCommentConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Comment>
}

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** The author of a comment */
export type Commenter = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output']
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID']['output']
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']['output']>
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']['output']>
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by true/false approval of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID',
}

/** Confirm */
export type ConfirmField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ConfirmField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ConfirmFieldClasses>
    /** Confirm */
    confirmField?: Maybe<Scalars['String']['output']>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<ConfirmFieldDescription>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ConfirmFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<ConfirmFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ConfirmFieldClasses = {
  __typename?: 'ConfirmFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ConfirmFieldDescription = {
  __typename?: 'ConfirmFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ConfirmFieldHelp = {
  __typename?: 'ConfirmFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type ConfirmFieldInputLimitSet = {
  __typename?: 'ConfirmFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** The ContactItem type */
export type ContactItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'ContactItem'
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    contactItemId: Scalars['Int']['output']
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для контента&quot; was set to Show in GraphQL. */
    contentAddons?: Maybe<ContactItem_Contentaddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the contacts_fragment object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the ContactItem type and the ContactItem type */
    preview?: Maybe<ContactItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContactItem */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the ContactItem type and the TermNode type */
    terms?: Maybe<ContactItemToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<ContactItem>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<ContactItem>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The ContactItem type */
export type ContactItemContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The ContactItem type */
export type ContactItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The ContactItem type */
export type ContactItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The ContactItem type */
export type ContactItemTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ContactItemToTermNodeConnectionWhereArgs>
}

/** The ContactItem type */
export type ContactItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The ContactItem type */
export type ContactItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContactItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the ContactItem type and the ContactItem type */
export type ContactItemToPreviewConnectionEdge = {
  __typename?: 'ContactItemToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<ContactItem>
}

/** Connection between the ContactItem type and the TermNode type */
export type ContactItemToTermNodeConnection = {
  __typename?: 'ContactItemToTermNodeConnection'
  /** Edges for the ContactItemToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<ContactItemToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type ContactItemToTermNodeConnectionEdge = {
  __typename?: 'ContactItemToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the ContactItemToTermNodeConnection connection */
export type ContactItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type ContactItem_Contentaddons = AcfFieldGroup & {
  __typename?: 'ContactItem_Contentaddons'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  order?: Maybe<Scalars['Float']['output']>
  role?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Nodes used to manage content */
export type ContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
  /** The ID of the node in the database. */
  databaseId: Scalars['Int']['output']
  /** Post publishing date. */
  date?: Maybe<Scalars['String']['output']>
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']['output']>
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>
  /** The unique resource identifier path */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']['output']>
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']['output']>
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']['output']>
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']['output']>
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = {
  __typename?: 'ContentNodeToContentTypeConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<ContentType>
}

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = {
  __typename?: 'ContentNodeToEditLastConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<User>
}

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = {
  __typename?: 'ContentNodeToEditLockConnectionEdge'
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']['output']>
  /** The node of the connection, without the edges */
  node?: Maybe<User>
}

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = {
  __typename?: 'ContentNodeToEnqueuedScriptConnection'
  /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedScript>
}

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection'
  /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedStylesheet>
}

/** A union of Content Node Types that support revisions */
export type ContentRevisionUnion = Page | Post

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>
}

/** An Post Type object */
export type ContentType = Node &
  UniformResourceIdentifiable & {
    __typename?: 'ContentType'
    /** Whether this content type should can be exported. */
    canExport?: Maybe<Scalars['Boolean']['output']>
    /** Connection between the ContentType type and the Taxonomy type */
    connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>
    /** Connection between the ContentType type and the ContentNode type */
    contentNodes?: Maybe<ContentTypeToContentNodeConnection>
    /** Whether content of this type should be deleted when the author of it is deleted from the system. */
    deleteWithUser?: Maybe<Scalars['Boolean']['output']>
    /** Description of the content type. */
    description?: Maybe<Scalars['String']['output']>
    /** Whether to exclude nodes of this content type from front end search results. */
    excludeFromSearch?: Maybe<Scalars['Boolean']['output']>
    /** The plural name of the content type within the GraphQL Schema. */
    graphqlPluralName?: Maybe<Scalars['String']['output']>
    /** The singular name of the content type within the GraphQL Schema. */
    graphqlSingleName?: Maybe<Scalars['String']['output']>
    /** Whether this content type should have archives. Content archives are generated by type and by date. */
    hasArchive?: Maybe<Scalars['Boolean']['output']>
    /** Whether the content type is hierarchical, for example pages. */
    hierarchical?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the post-type object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether this page is set to the static front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether this page is set to the blog posts page. */
    isPostsPage: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Display name of the content type. */
    label?: Maybe<Scalars['String']['output']>
    /** Details about the content type labels. */
    labels?: Maybe<PostTypeLabelDetails>
    /** The name of the icon file to display as a menu icon. */
    menuIcon?: Maybe<Scalars['String']['output']>
    /** The position of this post type in the menu. Only applies if show_in_menu is true. */
    menuPosition?: Maybe<Scalars['Int']['output']>
    /** The internal name of the post type. This should not be used for display purposes. */
    name?: Maybe<Scalars['String']['output']>
    /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
    public?: Maybe<Scalars['Boolean']['output']>
    /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
    publiclyQueryable?: Maybe<Scalars['Boolean']['output']>
    /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
    restBase?: Maybe<Scalars['String']['output']>
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass?: Maybe<Scalars['String']['output']>
    /** Makes this content type available via the admin bar. */
    showInAdminBar?: Maybe<Scalars['Boolean']['output']>
    /** Whether to add the content type to the GraphQL Schema. */
    showInGraphql?: Maybe<Scalars['Boolean']['output']>
    /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
    showInMenu?: Maybe<Scalars['Boolean']['output']>
    /** Makes this content type available for selection in navigation menus. */
    showInNavMenus?: Maybe<Scalars['Boolean']['output']>
    /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
    showInRest?: Maybe<Scalars['Boolean']['output']>
    /** Whether to generate and allow a UI for managing this content type in the admin. */
    showUi?: Maybe<Scalars['Boolean']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>
}

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  AboutFragments = 'ABOUT_FRAGMENTS',
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  ContactsFragment = 'CONTACTS_FRAGMENT',
  /** The Type of Content object */
  Feedback = 'FEEDBACK',
  /** The Type of Content object */
  FooterFragments = 'FOOTER_FRAGMENTS',
  /** The Type of Content object */
  Fragment = 'FRAGMENT',
  /** The Type of Content object */
  HeroFragments = 'HERO_FRAGMENTS',
  /** The Type of Content object */
  Messengers = 'MESSENGERS',
  /** The Type of Content object */
  Navigation = 'NAVIGATION',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  PrivacyPolicy = 'PRIVACY_POLICY',
  /** The Type of Content object */
  Recruit = 'RECRUIT',
  /** The Type of Content object */
  Review = 'REVIEW',
  /** The Type of Content object */
  Skill = 'SKILL',
  /** The Type of Content object */
  SocialNetworks = 'SOCIAL_NETWORKS',
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME',
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = {
  __typename?: 'ContentTypeToContentNodeConnection'
  /** Edges for the ContentTypeToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = {
  __typename?: 'ContentTypeToContentNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>
}

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = {
  __typename?: 'ContentTypeToTaxonomyConnection'
  /** Edges for the ContentTypeToTaxonomyConnection connection */
  edges?: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Taxonomy>
}

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  Review = 'REVIEW',
  /** The Type of Content object */
  Skill = 'SKILL',
}

/** Allowed Content Types of the SkillCategory taxonomy. */
export enum ContentTypesOfSkillCategoryEnum {
  /** The Type of Content object */
  Skill = 'SKILL',
}

/** Allowed Content Types of the Tag taxonomy. */
export enum ContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Input for the createAboutItem mutation */
export type CreateAboutItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createAboutItem mutation */
export type CreateAboutItemPayload = {
  __typename?: 'CreateAboutItemPayload'
  /** The Post object mutation type. */
  aboutItem?: Maybe<AboutItem>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the category object to mutate */
  name: Scalars['String']['input']
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload'
  /** The created category */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the createComment mutation */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']['input']>
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']['input']>
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']['input']>
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** Parent comment of current comment. */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The comment that was created */
  comment?: Maybe<Comment>
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']['output']>
}

/** Input for the createContactItem mutation */
export type CreateContactItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createContactItem mutation */
export type CreateContactItemPayload = {
  __typename?: 'CreateContactItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  contactItem?: Maybe<ContactItem>
}

/** Input for the createFeedbackItem mutation */
export type CreateFeedbackItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createFeedbackItem mutation */
export type CreateFeedbackItemPayload = {
  __typename?: 'CreateFeedbackItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  feedbackItem?: Maybe<FeedbackItem>
}

/** Input for the createFooterItem mutation */
export type CreateFooterItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createFooterItem mutation */
export type CreateFooterItemPayload = {
  __typename?: 'CreateFooterItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  footerItem?: Maybe<FooterItem>
}

/** Input for the createFragment mutation */
export type CreateFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createFragment mutation */
export type CreateFragmentPayload = {
  __typename?: 'CreateFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  fragment?: Maybe<Fragment>
}

/** Input for the createHeroItem mutation */
export type CreateHeroItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createHeroItem mutation */
export type CreateHeroItemPayload = {
  __typename?: 'CreateHeroItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  heroItem?: Maybe<HeroItem>
}

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']['input']>
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']['input']>
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']['input']>
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']['input']>
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']['input']>
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>
  language?: InputMaybe<LanguageCodeEnum>
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']['input']>
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createMediaItem mutation */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the createMessenger mutation */
export type CreateMessengerInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createMessenger mutation */
export type CreateMessengerPayload = {
  __typename?: 'CreateMessengerPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  messenger?: Maybe<Messenger>
}

/** Input for the createNavigationItem mutation */
export type CreateNavigationItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createNavigationItem mutation */
export type CreateNavigationItemPayload = {
  __typename?: 'CreateNavigationItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the createPage mutation */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createPage mutation */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  page?: Maybe<Page>
}

/** Input for the createPostFormat mutation */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The name of the post_format object to mutate */
  name: Scalars['String']['input']
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createPostFormat mutation */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_format */
  postFormat?: Maybe<PostFormat>
}

/** Input for the createPost mutation */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']['input']>
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** The payload for the createPost mutation */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  post?: Maybe<Post>
}

/** Input for the createPrivacyPolicyItem mutation */
export type CreatePrivacyPolicyItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createPrivacyPolicyItem mutation */
export type CreatePrivacyPolicyItemPayload = {
  __typename?: 'CreatePrivacyPolicyItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  privacyPolicyItem?: Maybe<PrivacyPolicyItem>
}

/** Input for the createRecruit mutation */
export type CreateRecruitInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createRecruit mutation */
export type CreateRecruitPayload = {
  __typename?: 'CreateRecruitPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  recruit?: Maybe<Recruit>
}

/** Input for the createReview mutation */
export type CreateReviewInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** Set connections between the Review and postFormats */
  postFormats?: InputMaybe<ReviewPostFormatsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createReview mutation */
export type CreateReviewPayload = {
  __typename?: 'CreateReviewPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  review?: Maybe<Review>
}

/** Input for the createSkillCategory mutation */
export type CreateSkillCategoryInput = {
  /** The slug that the skill_list will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the skill_list object */
  description?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the skill_list object to mutate */
  name: Scalars['String']['input']
  /** The ID of the skill_list that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createSkillCategory mutation */
export type CreateSkillCategoryPayload = {
  __typename?: 'CreateSkillCategoryPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created skill_list */
  skillCategory?: Maybe<SkillCategory>
}

/** Input for the createSkill mutation */
export type CreateSkillInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** Set connections between the Skill and postFormats */
  postFormats?: InputMaybe<SkillPostFormatsInput>
  /** Set connections between the Skill and SkillCategories */
  skillCategories?: InputMaybe<SkillSkillCategoriesInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createSkill mutation */
export type CreateSkillPayload = {
  __typename?: 'CreateSkillPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  skill?: Maybe<Skill>
}

/** Input for the createSocialNetwork mutation */
export type CreateSocialNetworkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createSocialNetwork mutation */
export type CreateSocialNetworkPayload = {
  __typename?: 'CreateSocialNetworkPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  socialNetwork?: Maybe<SocialNetwork>
}

/** Input for the createTag mutation */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the post_tag object to mutate */
  name: Scalars['String']['input']
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createTag mutation */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_tag */
  tag?: Maybe<Tag>
}

/** Input for the createUser mutation */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** A string that contains the user's username for logging in. */
  username: Scalars['String']['input']
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createUser mutation */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
}

/** Date/Time */
export type DateField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'DateField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<DateFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default To Current Date */
    dateDefault?: Maybe<Scalars['Boolean']['output']>
    /** Format */
    dateFormat?: Maybe<Scalars['String']['output']>
    /** Date/Time Mode */
    dateMode?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<DateFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<DateFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** Time Settings */
    timeSettings?: Maybe<DateFieldTimeSettings>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
    /** Year Range */
    yearRange?: Maybe<DateFieldYearRange>
  }

/** Custom Class Names */
export type DateFieldClasses = {
  __typename?: 'DateFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type DateFieldDescription = {
  __typename?: 'DateFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type DateFieldHelp = {
  __typename?: 'DateFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Time Settings */
export type DateFieldTimeSettings = {
  __typename?: 'DateFieldTimeSettings'
  /** 24 Hour Input */
  hours24?: Maybe<Scalars['Boolean']['output']>
  /** Minute Increment */
  minuteIncrement?: Maybe<Scalars['Int']['output']>
}

/** Year Range */
export type DateFieldYearRange = {
  __typename?: 'DateFieldYearRange'
  /** End Year */
  yearRangeEnd?: Maybe<Scalars['Int']['output']>
  /** Start Year */
  yearRangeStart?: Maybe<Scalars['Int']['output']>
}

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']['input']>
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']['input']>
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']['input']>
}

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: InputMaybe<DateInput>
  /** Nodes should be returned before this date */
  before?: InputMaybe<DateInput>
  /** Column to query against */
  column?: InputMaybe<PostObjectsConnectionDateColumnEnum>
  /** For after/before, whether exact value should be matched or not */
  compare?: InputMaybe<Scalars['String']['input']>
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']['input']>
  /** Hour (from 0 to 23) */
  hour?: InputMaybe<Scalars['Int']['input']>
  /** For after/before, whether exact value should be matched or not */
  inclusive?: InputMaybe<Scalars['Boolean']['input']>
  /** Minute (from 0 to 59) */
  minute?: InputMaybe<Scalars['Int']['input']>
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']['input']>
  /** OR or AND, how the sub-arrays should be compared */
  relation?: InputMaybe<RelationEnum>
  /** Second (0 to 59) */
  second?: InputMaybe<Scalars['Int']['input']>
  /** Week of the year (from 0 to 53) */
  week?: InputMaybe<Scalars['Int']['input']>
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']['input']>
}

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate'
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>
}

/** Input for the deleteAboutItem mutation */
export type DeleteAboutItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the AboutItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteAboutItem mutation */
export type DeleteAboutItemPayload = {
  __typename?: 'DeleteAboutItemPayload'
  /** The object before it was deleted */
  aboutItem?: Maybe<AboutItem>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload'
  /** The deteted term object */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The deleted comment ID */
  id: Scalars['ID']['input']
}

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The deleted comment object */
  comment?: Maybe<Comment>
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteContactItem mutation */
export type DeleteContactItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the ContactItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteContactItem mutation */
export type DeleteContactItemPayload = {
  __typename?: 'DeleteContactItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The object before it was deleted */
  contactItem?: Maybe<ContactItem>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteFeedbackItem mutation */
export type DeleteFeedbackItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the FeedbackItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteFeedbackItem mutation */
export type DeleteFeedbackItemPayload = {
  __typename?: 'DeleteFeedbackItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  feedbackItem?: Maybe<FeedbackItem>
}

/** Input for the deleteFooterItem mutation */
export type DeleteFooterItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the FooterItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteFooterItem mutation */
export type DeleteFooterItemPayload = {
  __typename?: 'DeleteFooterItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  footerItem?: Maybe<FooterItem>
}

/** Input for the deleteFragment mutation */
export type DeleteFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Fragment to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteFragment mutation */
export type DeleteFragmentPayload = {
  __typename?: 'DeleteFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  fragment?: Maybe<Fragment>
}

/** Input for the deleteHeroItem mutation */
export type DeleteHeroItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the HeroItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteHeroItem mutation */
export type DeleteHeroItemPayload = {
  __typename?: 'DeleteHeroItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  heroItem?: Maybe<HeroItem>
}

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the mediaItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the deleteMessenger mutation */
export type DeleteMessengerInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Messenger to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteMessenger mutation */
export type DeleteMessengerPayload = {
  __typename?: 'DeleteMessengerPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  messenger?: Maybe<Messenger>
}

/** Input for the deleteNavigationItem mutation */
export type DeleteNavigationItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the NavigationItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteNavigationItem mutation */
export type DeleteNavigationItemPayload = {
  __typename?: 'DeleteNavigationItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the deletePage mutation */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the page to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  page?: Maybe<Page>
}

/** Input for the deletePostFormat mutation */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deletePostFormat mutation */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deteted term object */
  postFormat?: Maybe<PostFormat>
}

/** Input for the deletePost mutation */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the post to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  post?: Maybe<Post>
}

/** Input for the deletePrivacyPolicyItem mutation */
export type DeletePrivacyPolicyItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the PrivacyPolicyItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deletePrivacyPolicyItem mutation */
export type DeletePrivacyPolicyItemPayload = {
  __typename?: 'DeletePrivacyPolicyItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  privacyPolicyItem?: Maybe<PrivacyPolicyItem>
}

/** Input for the deleteRecruit mutation */
export type DeleteRecruitInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Recruit to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteRecruit mutation */
export type DeleteRecruitPayload = {
  __typename?: 'DeleteRecruitPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  recruit?: Maybe<Recruit>
}

/** Input for the deleteReview mutation */
export type DeleteReviewInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Review to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteReview mutation */
export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  review?: Maybe<Review>
}

/** Input for the deleteSkillCategory mutation */
export type DeleteSkillCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the SkillCategory to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteSkillCategory mutation */
export type DeleteSkillCategoryPayload = {
  __typename?: 'DeleteSkillCategoryPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deteted term object */
  skillCategory?: Maybe<SkillCategory>
}

/** Input for the deleteSkill mutation */
export type DeleteSkillInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Skill to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteSkill mutation */
export type DeleteSkillPayload = {
  __typename?: 'DeleteSkillPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  skill?: Maybe<Skill>
}

/** Input for the deleteSocialNetwork mutation */
export type DeleteSocialNetworkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the SocialNetwork to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteSocialNetwork mutation */
export type DeleteSocialNetworkPayload = {
  __typename?: 'DeleteSocialNetworkPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  socialNetwork?: Maybe<SocialNetwork>
}

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the tag to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deteted term object */
  tag?: Maybe<Tag>
}

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the user you want to delete */
  id: Scalars['ID']['input']
  /** Reassign posts and links to new User ID. */
  reassignId?: InputMaybe<Scalars['ID']['input']>
}

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted user object */
  user?: Maybe<User>
}

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings'
  /** Разрешить оставлять комментарии к новым записям. */
  defaultCommentStatus?: Maybe<Scalars['String']['output']>
  /** Разрешить ссылки оповещения с других блогов (уведомления и обратные ссылки) на новые статьи. */
  defaultPingStatus?: Maybe<Scalars['String']['output']>
}

/** Email */
export type EmailField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'EmailField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<EmailFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<EmailFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<EmailFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type EmailFieldClasses = {
  __typename?: 'EmailFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type EmailFieldDescription = {
  __typename?: 'EmailFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type EmailFieldHelp = {
  __typename?: 'EmailFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** @todo */
  args?: Maybe<Scalars['Boolean']['output']>
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']['output']>
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']['output']>
  /** The ID of the enqueued asset */
  id: Scalars['ID']['output']
  /** The source of the asset */
  src?: Maybe<Scalars['String']['output']>
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']['output']>
}

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset &
  Node & {
    __typename?: 'EnqueuedScript'
    /** @todo */
    args?: Maybe<Scalars['Boolean']['output']>
    /** Dependencies needed to use this asset */
    dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>
    /** Extra information needed for the script */
    extra?: Maybe<Scalars['String']['output']>
    /** The handle of the enqueued asset */
    handle?: Maybe<Scalars['String']['output']>
    /** The ID of the enqueued asset */
    id: Scalars['ID']['output']
    /** The source of the asset */
    src?: Maybe<Scalars['String']['output']>
    /** The version of the enqueued asset */
    version?: Maybe<Scalars['String']['output']>
  }

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset &
  Node & {
    __typename?: 'EnqueuedStylesheet'
    /** @todo */
    args?: Maybe<Scalars['Boolean']['output']>
    /** Dependencies needed to use this asset */
    dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>
    /** Extra information needed for the script */
    extra?: Maybe<Scalars['String']['output']>
    /** The handle of the enqueued asset */
    handle?: Maybe<Scalars['String']['output']>
    /** The ID of the enqueued asset */
    id: Scalars['ID']['output']
    /** The source of the asset */
    src?: Maybe<Scalars['String']['output']>
    /** The version of the enqueued asset */
    version?: Maybe<Scalars['String']['output']>
  }

/** The FeedbackItem type */
export type FeedbackItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'FeedbackItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для контента&quot; was set to Show in GraphQL. */
    contentAddons?: Maybe<FeedbackItem_Contentaddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    feedbackItemId: Scalars['Int']['output']
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the feedback object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the FeedbackItem type and the FeedbackItem type */
    preview?: Maybe<FeedbackItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the FeedbackItem */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the FeedbackItem type and the TermNode type */
    terms?: Maybe<FeedbackItemToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<FeedbackItem>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<FeedbackItem>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The FeedbackItem type */
export type FeedbackItemContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The FeedbackItem type */
export type FeedbackItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The FeedbackItem type */
export type FeedbackItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The FeedbackItem type */
export type FeedbackItemTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FeedbackItemToTermNodeConnectionWhereArgs>
}

/** The FeedbackItem type */
export type FeedbackItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The FeedbackItem type */
export type FeedbackItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum FeedbackItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the FeedbackItem type and the FeedbackItem type */
export type FeedbackItemToPreviewConnectionEdge = {
  __typename?: 'FeedbackItemToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<FeedbackItem>
}

/** Connection between the FeedbackItem type and the TermNode type */
export type FeedbackItemToTermNodeConnection = {
  __typename?: 'FeedbackItemToTermNodeConnection'
  /** Edges for the FeedbackItemToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<FeedbackItemToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type FeedbackItemToTermNodeConnectionEdge = {
  __typename?: 'FeedbackItemToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the FeedbackItemToTermNodeConnection connection */
export type FeedbackItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type FeedbackItem_Contentaddons = AcfFieldGroup & {
  __typename?: 'FeedbackItem_Contentaddons'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  order?: Maybe<Scalars['Float']['output']>
  role?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Type of ID being used identify the form */
export type FieldError = {
  __typename?: 'FieldError'
  /** Field Id */
  fieldId: Scalars['Int']['output']
  /** Localized error message */
  message?: Maybe<Scalars['String']['output']>
  /** Slug error identifier */
  slug?: Maybe<Scalars['String']['output']>
}

/** The Id of the field */
export type FieldOption = {
  __typename?: 'FieldOption'
  /** The Id of the field */
  calc?: Maybe<Scalars['String']['output']>
  /** The Id of the field */
  label?: Maybe<Scalars['String']['output']>
  /** The Id of the field */
  order?: Maybe<Scalars['Int']['output']>
  /** The Id of the field */
  selected?: Maybe<Scalars['Boolean']['output']>
  /** The Id of the field */
  value?: Maybe<Scalars['String']['output']>
}

/** First Name */
export type FirstnameField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'FirstnameField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<FirstnameFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<FirstnameFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<FirstnameFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type FirstnameFieldClasses = {
  __typename?: 'FirstnameFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type FirstnameFieldDescription = {
  __typename?: 'FirstnameFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type FirstnameFieldHelp = {
  __typename?: 'FirstnameFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** The FooterItem type */
export type FooterItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'FooterItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для контента&quot; was set to Show in GraphQL. */
    contentAddons?: Maybe<FooterItem_Contentaddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    footerItemId: Scalars['Int']['output']
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the footer_fragments object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the FooterItem type and the FooterItem type */
    preview?: Maybe<FooterItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the FooterItem */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the FooterItem type and the TermNode type */
    terms?: Maybe<FooterItemToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<FooterItem>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<FooterItem>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The FooterItem type */
export type FooterItemContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The FooterItem type */
export type FooterItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The FooterItem type */
export type FooterItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The FooterItem type */
export type FooterItemTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FooterItemToTermNodeConnectionWhereArgs>
}

/** The FooterItem type */
export type FooterItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The FooterItem type */
export type FooterItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum FooterItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the FooterItem type and the FooterItem type */
export type FooterItemToPreviewConnectionEdge = {
  __typename?: 'FooterItemToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<FooterItem>
}

/** Connection between the FooterItem type and the TermNode type */
export type FooterItemToTermNodeConnection = {
  __typename?: 'FooterItemToTermNodeConnection'
  /** Edges for the FooterItemToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<FooterItemToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type FooterItemToTermNodeConnectionEdge = {
  __typename?: 'FooterItemToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the FooterItemToTermNodeConnection connection */
export type FooterItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type FooterItem_Contentaddons = AcfFieldGroup & {
  __typename?: 'FooterItem_Contentaddons'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  order?: Maybe<Scalars['Float']['output']>
  role?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The form object */
export type Form = DatabaseIdentifier &
  Node & {
    __typename?: 'Form'
    /** Добавить кнопку «Отправить» */
    addSubmit?: Maybe<Scalars['Boolean']['output']>
    /** Allow a public link? */
    allowPublicLink?: Maybe<Scalars['Boolean']['output']>
    /** Пользовательские имена классов */
    classes?: Maybe<FormClasses>
    /** Очистить успешно заполненную форму? */
    clearComplete?: Maybe<Scalars['Boolean']['output']>
    /** Валюта */
    currency?: Maybe<Scalars['String']['output']>
    /** Custom Labels */
    customMessages?: Maybe<FormCustomMessages>
    /** The Id of the form */
    databaseId: Scalars['Int']['output']
    /** Позиция метки по умолчанию */
    defaultLabelPos?: Maybe<Scalars['String']['output']>
    /** Embed Your Form */
    embedForm?: Maybe<Scalars['String']['output']>
    /** Connection between the Form type and the FormField type */
    fields?: Maybe<FormToFormFieldConnection>
    /** The Id of the form */
    formId?: Maybe<Scalars['Int']['output']>
    /** Скрыть успешно заполненную форму? */
    hideComplete?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the form */
    id: Scalars['ID']['output']
    /** Ключ формы */
    key?: Maybe<Scalars['String']['output']>
    /** Ограничение заявок */
    limitSubmissionsSet?: Maybe<FormLimitSubmissionsSet>
    /** Зарегистрированы */
    loggedInSet?: Maybe<FormLoggedInSet>
    /** Link To Your Form */
    publicLink?: Maybe<Scalars['String']['output']>
    /** Repeatable fieldsets */
    repeatableFieldsets?: Maybe<Scalars['String']['output']>
    /** The Locale of the form */
    seqNum?: Maybe<Scalars['Int']['output']>
    /** Отобразить название формы */
    showTitle?: Maybe<Scalars['Boolean']['output']>
    /** Название формы */
    title?: Maybe<Scalars['String']['output']>
    /** Unique Field */
    uniqueFieldSet?: Maybe<FormUniqueFieldSet>
  }

/** The form object */
export type FormFieldsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Пользовательские имена классов */
export type FormClasses = {
  __typename?: 'FormClasses'
  /** Элемент */
  elementClass?: Maybe<Scalars['String']['output']>
  /** Оболочка */
  wrapperClass?: Maybe<Scalars['String']['output']>
}

/** Custom Labels */
export type FormCustomMessages = {
  __typename?: 'FormCustomMessages'
  /** Please enter a valid date! */
  changeDateErrorMsg?: Maybe<Scalars['String']['output']>
  /** Укажите действительный адрес электронной почты! */
  changeEmailErrorMsg?: Maybe<Scalars['String']['output']>
  /** Содержание этих полей должно совпадать! */
  confirmFieldErrorMsg?: Maybe<Scalars['String']['output']>
  /** Увеличивайте с шагом  */
  fieldNumberIncrementBy?: Maybe<Scalars['String']['output']>
  /** Макс. номер ошибки */
  fieldNumberNumMaxError?: Maybe<Scalars['String']['output']>
  /** Мин. номер ошибки */
  fieldNumberNumMinError?: Maybe<Scalars['String']['output']>
  /** Поля, помеченные символом &lt;span class=&quot;ninja-forms-req-symbol&quot;&gt;*&lt;/span&gt;, обязательны к заполнению */
  fieldsMarkedRequired?: Maybe<Scalars['String']['output']>
  /** Исправьте ошибки перед отправкой этой формы. */
  formErrorsCorrectErrors?: Maybe<Scalars['String']['output']>
  /** Ошибка Honeypot */
  honeypotHoneypotError?: Maybe<Scalars['String']['output']>
  /** Это обязательное поле. */
  validateRequiredField?: Maybe<Scalars['String']['output']>
}

/** Action object */
export type FormField = {
  /** Creation date */
  createdAt?: Maybe<Scalars['Int']['output']>
  /** The Id of the field */
  fieldId?: Maybe<Scalars['Int']['output']>
  /** Key of the field */
  fieldKey?: Maybe<Scalars['String']['output']>
  /** Label of the field */
  fieldLabel?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier of the field */
  id: Scalars['ID']['output']
  /** Key of the field */
  key?: Maybe<Scalars['String']['output']>
  /** Label of the field */
  label?: Maybe<Scalars['String']['output']>
  /** Position order of the field */
  order?: Maybe<Scalars['Int']['output']>
  /** Parent form id */
  parentId?: Maybe<Scalars['Int']['output']>
  /** Indtifiable? */
  personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
  /** The field is required? */
  required?: Maybe<Scalars['Boolean']['output']>
  /** type of the field */
  type?: Maybe<Scalars['String']['output']>
  /** Update date */
  updatedAt?: Maybe<Scalars['Int']['output']>
}

/** The Type of Identifier used to fetch a single Form. Default is ID. */
export enum FormIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
}

/** Ограничение заявок */
export type FormLimitSubmissionsSet = {
  __typename?: 'FormLimitSubmissionsSet'
  /** Сообщение о достижении предела */
  subLimitMsg?: Maybe<Scalars['String']['output']>
  /** Ограничение кол-ва отправок формы */
  subLimitNumber?: Maybe<Scalars['Int']['output']>
}

/** Зарегистрированы */
export type FormLoggedInSet = {
  __typename?: 'FormLoggedInSet'
  /** Должен ли пользователь авторизоваться для просмотра формы? */
  loggedIn?: Maybe<Scalars['Boolean']['output']>
  /** Сообщение о необходимости авторизации */
  notLoggedInMsg?: Maybe<Scalars['String']['output']>
}

/** Connection between the Form type and the FormField type */
export type FormToFormFieldConnection = {
  __typename?: 'FormToFormFieldConnection'
  /** Edges for the FormToFormFieldConnection connection */
  edges?: Maybe<Array<Maybe<FormToFormFieldConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<FormField>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type FormToFormFieldConnectionEdge = {
  __typename?: 'FormToFormFieldConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<FormField>
}

/** Unique Field */
export type FormUniqueFieldSet = {
  __typename?: 'FormUniqueFieldSet'
  /** unique_field */
  uniqueField?: Maybe<Scalars['String']['output']>
  /** Unique Field Error Message */
  uniqueFieldError?: Maybe<Scalars['String']['output']>
}

/** The Fragment type */
export type Fragment = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithExcerpt &
  NodeWithFeaturedImage &
  NodeWithPageAttributes &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'Fragment'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** The excerpt of the post. */
    excerpt?: Maybe<Scalars['String']['output']>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    fragmentId: Scalars['Int']['output']
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Фрагменты&quot; was set to Show in GraphQL. */
    fragments?: Maybe<Fragment_Fragments>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the fragment object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<Scalars['Int']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the Fragment type and the Fragment type */
    preview?: Maybe<FragmentToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the Fragment */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the Fragment type and the TermNode type */
    terms?: Maybe<FragmentToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<Fragment>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Fragment>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The Fragment type */
export type FragmentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Fragment type */
export type FragmentEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Fragment type */
export type FragmentEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Fragment type */
export type FragmentExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Fragment type */
export type FragmentTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FragmentToTermNodeConnectionWhereArgs>
}

/** The Fragment type */
export type FragmentTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Fragment type */
export type FragmentTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum FragmentIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the Fragment type and the Fragment type */
export type FragmentToPreviewConnectionEdge = {
  __typename?: 'FragmentToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Fragment>
}

/** Connection between the Fragment type and the TermNode type */
export type FragmentToTermNodeConnection = {
  __typename?: 'FragmentToTermNodeConnection'
  /** Edges for the FragmentToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<FragmentToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type FragmentToTermNodeConnectionEdge = {
  __typename?: 'FragmentToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the FragmentToTermNodeConnection connection */
export type FragmentToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type Fragment_Fragments = AcfFieldGroup & {
  __typename?: 'Fragment_Fragments'
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  reverse?: Maybe<Scalars['Boolean']['output']>
}

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings'
  /** Общий формат даты. */
  dateFormat?: Maybe<Scalars['String']['output']>
  /** Слоган сайта. */
  description?: Maybe<Scalars['String']['output']>
  /** Этот адрес используется в целях администрирования. Например, для уведомления о новых пользователях. */
  email?: Maybe<Scalars['String']['output']>
  /** Код локали WordPress. */
  language?: Maybe<Scalars['String']['output']>
  /** Первый день недели. */
  startOfWeek?: Maybe<Scalars['Int']['output']>
  /** Общий формат времени. */
  timeFormat?: Maybe<Scalars['String']['output']>
  /** Город в той же временной зоне что и у вас. */
  timezone?: Maybe<Scalars['String']['output']>
  /** Название сайта. */
  title?: Maybe<Scalars['String']['output']>
  /** Адрес сайта (URL) */
  url?: Maybe<Scalars['String']['output']>
}

/** The HeroItem type */
export type HeroItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'HeroItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для контента&quot; was set to Show in GraphQL. */
    contentAddons?: Maybe<HeroItem_Contentaddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    heroItemId: Scalars['Int']['output']
    /** The globally unique identifier of the hero_fragments object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the HeroItem type and the HeroItem type */
    preview?: Maybe<HeroItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the HeroItem */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the HeroItem type and the TermNode type */
    terms?: Maybe<HeroItemToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<HeroItem>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<HeroItem>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The HeroItem type */
export type HeroItemContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The HeroItem type */
export type HeroItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The HeroItem type */
export type HeroItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The HeroItem type */
export type HeroItemTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HeroItemToTermNodeConnectionWhereArgs>
}

/** The HeroItem type */
export type HeroItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The HeroItem type */
export type HeroItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum HeroItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the HeroItem type and the HeroItem type */
export type HeroItemToPreviewConnectionEdge = {
  __typename?: 'HeroItemToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<HeroItem>
}

/** Connection between the HeroItem type and the TermNode type */
export type HeroItemToTermNodeConnection = {
  __typename?: 'HeroItemToTermNodeConnection'
  /** Edges for the HeroItemToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<HeroItemToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type HeroItemToTermNodeConnectionEdge = {
  __typename?: 'HeroItemToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the HeroItemToTermNodeConnection connection */
export type HeroItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type HeroItem_Contentaddons = AcfFieldGroup & {
  __typename?: 'HeroItem_Contentaddons'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  order?: Maybe<Scalars['Float']['output']>
  role?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Hidden */
export type HiddenField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'HiddenField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection'
  /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>
}

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection'
  /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>
}

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<ContentNode>
}

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>
}

/** Divider */
export type HrField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'HrField'
    /** Custom Class Names */
    classes?: Maybe<HrFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Key of the field */
    key?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type HrFieldClasses = {
  __typename?: 'HrFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** HTML */
export type HtmlField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'HtmlField'
    /** Custom Class Names */
    classes?: Maybe<HtmlFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Key of the field */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type HtmlFieldClasses = {
  __typename?: 'HtmlFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Submitted field data */
export type InputField = {
  /** Field Id */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Field value */
  value?: InputMaybe<Scalars['String']['input']>
}

/** Language (Polylang) */
export type Language = {
  __typename?: 'Language'
  /** Language code (Polylang) */
  code?: Maybe<LanguageCodeEnum>
  /** Language ID (Polylang) */
  id: Scalars['ID']['output']
  /** Language locale (Polylang) */
  locale?: Maybe<Scalars['String']['output']>
  /** Human readable language name (Polylang) */
  name?: Maybe<Scalars['String']['output']>
  /** Language term slug. Prefer the &quot;code&quot; field if possible (Polylang) */
  slug?: Maybe<Scalars['String']['output']>
}

/** Enum of all available language codes */
export enum LanguageCodeEnum {
  En = 'EN',
  Ru = 'RU',
  /** The default locale of the site */
  RuRu = 'RU_RU',
}

/** Filter item by specific language, default language or list all languages */
export enum LanguageCodeFilterEnum {
  All = 'ALL',
  Default = 'DEFAULT',
  En = 'EN',
  Ru = 'RU',
  /** The default locale of the site */
  RuRu = 'RU_RU',
}

/** Last Name */
export type LastnameField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'LastnameField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<LastnameFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<LastnameFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<LastnameFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type LastnameFieldClasses = {
  __typename?: 'LastnameFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type LastnameFieldDescription = {
  __typename?: 'LastnameFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type LastnameFieldHelp = {
  __typename?: 'LastnameFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Checkbox List */
export type ListcheckboxField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ListcheckboxField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ListcheckboxFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<ListcheckboxFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ListcheckboxFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** options */
    options?: Maybe<Array<Maybe<FieldOption>>>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ListcheckboxFieldClasses = {
  __typename?: 'ListcheckboxFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ListcheckboxFieldDescription = {
  __typename?: 'ListcheckboxFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ListcheckboxFieldHelp = {
  __typename?: 'ListcheckboxFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Country */
export type ListcountryField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ListcountryField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ListcountryFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<ListcountryFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ListcountryFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** options */
    options?: Maybe<Array<Maybe<FieldOption>>>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ListcountryFieldClasses = {
  __typename?: 'ListcountryFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ListcountryFieldDescription = {
  __typename?: 'ListcountryFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ListcountryFieldHelp = {
  __typename?: 'ListcountryFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Select Image */
export type ListimageField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ListimageField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Allow Multiple Selections */
    allowMultiSelect?: Maybe<Scalars['Boolean']['output']>
    /** Custom Class Names */
    classes?: Maybe<ListimageFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<ListimageFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ListimageFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Image Options &lt;a href=&quot;#&quot; class=&quot;nf-add-new&quot;&gt;Add New&lt;/a&gt; */
    imageOptions?: Maybe<Scalars['String']['output']>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** List Orientation */
    listOrientation?: Maybe<Scalars['String']['output']>
    /** Number of Columns */
    numColumns?: Maybe<Scalars['Int']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** Show Labels */
    showOptionLabels?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ListimageFieldClasses = {
  __typename?: 'ListimageFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ListimageFieldDescription = {
  __typename?: 'ListimageFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ListimageFieldHelp = {
  __typename?: 'ListimageFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Multi-Select */
export type ListmultiselectField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ListmultiselectField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ListmultiselectFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<ListmultiselectFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ListmultiselectFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** Multi-Select Box Size */
    multiSize?: Maybe<Scalars['Int']['output']>
    /** options */
    options?: Maybe<Array<Maybe<FieldOption>>>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ListmultiselectFieldClasses = {
  __typename?: 'ListmultiselectFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ListmultiselectFieldDescription = {
  __typename?: 'ListmultiselectFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ListmultiselectFieldHelp = {
  __typename?: 'ListmultiselectFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Radio List */
export type ListradioField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ListradioField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ListradioFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<ListradioFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ListradioFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** options */
    options?: Maybe<Array<Maybe<FieldOption>>>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ListradioFieldClasses = {
  __typename?: 'ListradioFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ListradioFieldDescription = {
  __typename?: 'ListradioFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ListradioFieldHelp = {
  __typename?: 'ListradioFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Select */
export type ListselectField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ListselectField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ListselectFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<ListselectFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ListselectFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** options */
    options?: Maybe<Array<Maybe<FieldOption>>>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ListselectFieldClasses = {
  __typename?: 'ListselectFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ListselectFieldDescription = {
  __typename?: 'ListselectFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ListselectFieldHelp = {
  __typename?: 'ListselectFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** US States */
export type ListstateField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ListstateField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ListstateFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<ListstateFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ListstateFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** options */
    options?: Maybe<Array<Maybe<FieldOption>>>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ListstateFieldClasses = {
  __typename?: 'ListstateFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ListstateFieldDescription = {
  __typename?: 'ListstateFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ListstateFieldHelp = {
  __typename?: 'ListstateFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails'
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']['output']>
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']['output']>
  /** Meta information associated with the mediaItem */
  meta?: Maybe<MediaItemMeta>
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<MediaSize>>>
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']['output']>
}

/** The mediaItem type */
export type MediaItem = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  Node &
  NodeWithAuthor &
  NodeWithComments &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'MediaItem'
    /** Alternative text to display when resource is not displayed */
    altText?: Maybe<Scalars['String']['output']>
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']['output']>
    /** The caption for the resource */
    caption?: Maybe<Scalars['String']['output']>
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<Scalars['Int']['output']>
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars['String']['output']>
    /** Connection between the mediaItem type and the Comment type */
    comments?: Maybe<MediaItemToCommentConnection>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** Description of the image (stored as post_content) */
    description?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** The filesize in bytes of the resource */
    fileSize?: Maybe<Scalars['Int']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the attachment object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** Details about the mediaItem */
    mediaDetails?: Maybe<MediaDetails>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    mediaItemId: Scalars['Int']['output']
    /** Url of the mediaItem */
    mediaItemUrl?: Maybe<Scalars['String']['output']>
    /** Type of resource */
    mediaType?: Maybe<Scalars['String']['output']>
    /** The mime type of the mediaItem */
    mimeType?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** The parent of the node. The parent object can be of various types */
    parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the mediaItem */
    seo?: Maybe<PostTypeSeo>
    /** The sizes attribute value for an image. */
    sizes?: Maybe<Scalars['String']['output']>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** Url of the mediaItem */
    sourceUrl?: Maybe<Scalars['String']['output']>
    /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
    srcSet?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** Connection between the mediaItem type and the TermNode type */
    terms?: Maybe<MediaItemToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<MediaItem>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<MediaItem>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MediaItemToCommentConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The mediaItem type */
export type MediaItemFileSizeArgs = {
  size?: InputMaybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: InputMaybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: InputMaybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: InputMaybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MediaItemToTermNodeConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta'
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']['output']>
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']['output']>
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']['output']>
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']['output']>
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']['output']>
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']['output']>
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']['output']>
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']['output']>
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']['output']>
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']['output']>
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']['output']>
}

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048',
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH',
}

/** Connection between the mediaItem type and the Comment type */
export type MediaItemToCommentConnection = {
  __typename?: 'MediaItemToCommentConnection'
  /** Edges for the MediaItemToCommentConnection connection */
  edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
  __typename?: 'MediaItemToCommentConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Comment>
}

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the mediaItem type and the TermNode type */
export type MediaItemToTermNodeConnection = {
  __typename?: 'MediaItemToTermNodeConnection'
  /** Edges for the MediaItemToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<MediaItemToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MediaItemToTermNodeConnectionEdge = {
  __typename?: 'MediaItemToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the MediaItemToTermNodeConnection connection */
export type MediaItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize'
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']['output']>
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']['output']>
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']['output']>
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']['output']>
  /** The referenced size name */
  name?: Maybe<Scalars['String']['output']>
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']['output']>
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']['output']>
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = DatabaseIdentifier &
  Node & {
    __typename?: 'Menu'
    /** The number of items in the menu */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** The globally unique identifier of the nav menu object. */
    id: Scalars['ID']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** The locations a menu is assigned to */
    locations?: Maybe<Array<Maybe<MenuLocationEnum>>>
    /**
     * WP ID of the nav menu.
     * @deprecated Deprecated in favor of the databaseId field
     */
    menuId?: Maybe<Scalars['Int']['output']>
    /** Connection between the Menu type and the MenuItem type */
    menuItems?: Maybe<MenuToMenuItemConnection>
    /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
    name?: Maybe<Scalars['String']['output']>
    /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
    slug?: Maybe<Scalars['String']['output']>
  }

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MenuToMenuItemConnectionWhereArgs>
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier &
  Node & {
    __typename?: 'MenuItem'
    /** Connection between the MenuItem type and the MenuItem type */
    childItems?: Maybe<MenuItemToMenuItemConnection>
    /** Connection from MenuItem to it&#039;s connected node */
    connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>
    /**
     * The object connected to this menu item.
     * @deprecated Deprecated in favor of the connectedNode field
     */
    connectedObject?: Maybe<MenuItemObjectUnion>
    /** Class attribute for the menu item link */
    cssClasses?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** Description of the menu item. */
    description?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the nav menu item object. */
    id: Scalars['ID']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Label or title of the menu item. */
    label?: Maybe<Scalars['String']['output']>
    /** Link relationship (XFN) of the menu item. */
    linkRelationship?: Maybe<Scalars['String']['output']>
    /** The locations the menu item&#039;s Menu is assigned to */
    locations?: Maybe<Array<Maybe<MenuLocationEnum>>>
    /** The Menu a MenuItem is part of */
    menu?: Maybe<MenuItemToMenuConnectionEdge>
    /**
     * WP ID of the menu item.
     * @deprecated Deprecated in favor of the databaseId field
     */
    menuItemId?: Maybe<Scalars['Int']['output']>
    /** Menu item order */
    order?: Maybe<Scalars['Int']['output']>
    /** The database id of the parent menu item or null if it is the root */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent nav menu item object. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
    path?: Maybe<Scalars['String']['output']>
    /** Target attribute for the menu item link. */
    target?: Maybe<Scalars['String']['output']>
    /** Title attribute for the menu item link */
    title?: Maybe<Scalars['String']['output']>
    /** URL or destination of the menu item. */
    url?: Maybe<Scalars['String']['output']>
  }

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>
}

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int']['output']
  /** The unique resource identifier path */
  id: Scalars['ID']['output']
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion =
  | AboutItem
  | Category
  | ContactItem
  | FeedbackItem
  | FooterItem
  | Fragment
  | HeroItem
  | Messenger
  | NavigationItem
  | Page
  | Post
  | PrivacyPolicyItem
  | Recruit
  | Review
  | Skill
  | SkillCategory
  | SocialNetwork
  | Tag

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = {
  __typename?: 'MenuItemToMenuConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Menu>
}

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
  __typename?: 'MenuItemToMenuItemConnection'
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
  __typename?: 'MenuItemToMenuItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>
}

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<MenuItemLinkable>
}

/** Options for filtering the connection */
export type MenuItemsWhereArgs = {
  /** The ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
}

/** Registered menu locations */
export enum MenuLocationEnum {
  /** Empty menu location */
  Empty = 'EMPTY',
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by it's name */
  Name = 'NAME',
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = {
  __typename?: 'MenuToMenuItemConnection'
  /** Edges for the MenuToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
  __typename?: 'MenuToMenuItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>
}

/** The Messenger type */
export type Messenger = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'Messenger'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the messengers object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    messengerId: Scalars['Int']['output']
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the Messenger type and the Messenger type */
    preview?: Maybe<MessengerToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the Messenger */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The Messenger type */
export type MessengerContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Messenger type */
export type MessengerEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Messenger type */
export type MessengerEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Messenger type */
export type MessengerTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MessengerIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the Messenger type and the Messenger type */
export type MessengerToPreviewConnectionEdge = {
  __typename?: 'MessengerToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Messenger>
}

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** MimeType application/java */
  ApplicationJava = 'APPLICATION_JAVA',
  /** MimeType application/msword */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** MimeType application/octet-stream */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** MimeType application/onenote */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** MimeType application/oxps */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** MimeType application/pdf */
  ApplicationPdf = 'APPLICATION_PDF',
  /** MimeType application/rar */
  ApplicationRar = 'APPLICATION_RAR',
  /** MimeType application/rtf */
  ApplicationRtf = 'APPLICATION_RTF',
  /** MimeType application/ttaf+xml */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** MimeType application/vnd.apple.keynote */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** MimeType application/vnd.apple.numbers */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** MimeType application/vnd.apple.pages */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** MimeType application/vnd.ms-access */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** MimeType application/vnd.ms-excel */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** MimeType application/vnd.ms-excel.addin.macroEnabled.12 */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12 */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.macroEnabled.12 */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.template.macroEnabled.12 */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** MimeType application/vnd.ms-powerpoint.addin.macroEnabled.12 */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12 */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slide.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.template.macroEnabled.12 */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-project */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** MimeType application/vnd.ms-word.document.macroEnabled.12 */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** MimeType application/vnd.ms-word.template.macroEnabled.12 */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-write */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** MimeType application/vnd.ms-xpsdocument */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** MimeType application/vnd.oasis.opendocument.chart */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** MimeType application/vnd.oasis.opendocument.database */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** MimeType application/vnd.oasis.opendocument.formula */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** MimeType application/vnd.oasis.opendocument.graphics */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** MimeType application/vnd.oasis.opendocument.presentation */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** MimeType application/vnd.oasis.opendocument.spreadsheet */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** MimeType application/vnd.oasis.opendocument.text */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slide */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.template */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.template */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.template */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** MimeType application/wordperfect */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** MimeType application/x-7z-compressed */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** MimeType application/x-gzip */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** MimeType application/x-tar */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** MimeType application/zip */
  ApplicationZip = 'APPLICATION_ZIP',
  /** MimeType audio/aac */
  AudioAac = 'AUDIO_AAC',
  /** MimeType audio/flac */
  AudioFlac = 'AUDIO_FLAC',
  /** MimeType audio/midi */
  AudioMidi = 'AUDIO_MIDI',
  /** MimeType audio/mpeg */
  AudioMpeg = 'AUDIO_MPEG',
  /** MimeType audio/ogg */
  AudioOgg = 'AUDIO_OGG',
  /** MimeType audio/wav */
  AudioWav = 'AUDIO_WAV',
  /** MimeType audio/x-matroska */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** MimeType audio/x-ms-wax */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** MimeType audio/x-ms-wma */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** MimeType audio/x-realaudio */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** MimeType image/bmp */
  ImageBmp = 'IMAGE_BMP',
  /** MimeType image/gif */
  ImageGif = 'IMAGE_GIF',
  /** MimeType image/heic */
  ImageHeic = 'IMAGE_HEIC',
  /** MimeType image/jpeg */
  ImageJpeg = 'IMAGE_JPEG',
  /** MimeType image/png */
  ImagePng = 'IMAGE_PNG',
  /** MimeType image/svg+xml */
  ImageSvgXml = 'IMAGE_SVG_XML',
  /** MimeType image/tiff */
  ImageTiff = 'IMAGE_TIFF',
  /** MimeType image/webp */
  ImageWebp = 'IMAGE_WEBP',
  /** MimeType image/x-icon */
  ImageXIcon = 'IMAGE_X_ICON',
  /** MimeType text/calendar */
  TextCalendar = 'TEXT_CALENDAR',
  /** MimeType text/css */
  TextCss = 'TEXT_CSS',
  /** MimeType text/csv */
  TextCsv = 'TEXT_CSV',
  /** MimeType text/plain */
  TextPlain = 'TEXT_PLAIN',
  /** MimeType text/richtext */
  TextRichtext = 'TEXT_RICHTEXT',
  /** MimeType text/tab-separated-values */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** MimeType text/vtt */
  TextVtt = 'TEXT_VTT',
  /** MimeType video/3gpp */
  Video_3Gpp = 'VIDEO_3GPP',
  /** MimeType video/3gpp2 */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** MimeType video/avi */
  VideoAvi = 'VIDEO_AVI',
  /** MimeType video/divx */
  VideoDivx = 'VIDEO_DIVX',
  /** MimeType video/mp4 */
  VideoMp4 = 'VIDEO_MP4',
  /** MimeType video/mpeg */
  VideoMpeg = 'VIDEO_MPEG',
  /** MimeType video/ogg */
  VideoOgg = 'VIDEO_OGG',
  /** MimeType video/quicktime */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** MimeType video/webm */
  VideoWebm = 'VIDEO_WEBM',
  /** MimeType video/x-flv */
  VideoXFlv = 'VIDEO_X_FLV',
  /** MimeType video/x-matroska */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** MimeType video/x-ms-asf */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** MimeType video/x-ms-wm */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** MimeType video/x-ms-wmv */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** MimeType video/x-ms-wmx */
  VideoXMsWmx = 'VIDEO_X_MS_WMX',
}

/** The NavigationItem type */
export type NavigationItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'NavigationItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для контента&quot; was set to Show in GraphQL. */
    contentAddons?: Maybe<NavigationItem_Contentaddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the navigation object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    navigationItemId: Scalars['Int']['output']
    /** Connection between the NavigationItem type and the NavigationItem type */
    preview?: Maybe<NavigationItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the NavigationItem */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the NavigationItem type and the TermNode type */
    terms?: Maybe<NavigationItemToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<NavigationItem>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<NavigationItem>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The NavigationItem type */
export type NavigationItemContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The NavigationItem type */
export type NavigationItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The NavigationItem type */
export type NavigationItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The NavigationItem type */
export type NavigationItemTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<NavigationItemToTermNodeConnectionWhereArgs>
}

/** The NavigationItem type */
export type NavigationItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The NavigationItem type */
export type NavigationItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum NavigationItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the NavigationItem type and the NavigationItem type */
export type NavigationItemToPreviewConnectionEdge = {
  __typename?: 'NavigationItemToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<NavigationItem>
}

/** Connection between the NavigationItem type and the TermNode type */
export type NavigationItemToTermNodeConnection = {
  __typename?: 'NavigationItemToTermNodeConnection'
  /** Edges for the NavigationItemToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<NavigationItemToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type NavigationItemToTermNodeConnectionEdge = {
  __typename?: 'NavigationItemToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the NavigationItemToTermNodeConnection connection */
export type NavigationItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type NavigationItem_Contentaddons = AcfFieldGroup & {
  __typename?: 'NavigationItem_Contentaddons'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  order?: Maybe<Scalars['Float']['output']>
  role?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']['output']>
}

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = {
  __typename?: 'NodeWithAuthorToUserConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<User>
}

/** A node that can have comments associated with it */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']['output']>
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']['output']>
}

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']['output']>
}

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']['output']>
}

/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
  /** Post publishing date. */
  date?: Maybe<Scalars['String']['output']>
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']['output']>
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']['output']>
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>
  /** The unique resource identifier path */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']['output']>
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']['output']>
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']['output']>
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']['output']>
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** A node that can have a featured image set */
export type NodeWithFeaturedImageEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** A node that can have a featured image set */
export type NodeWithFeaturedImageEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<MediaItem>
}

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']['output']>
}

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']['output']>
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
}

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<ContentNode>
}

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>
}

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>
}

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']['output']>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']['output']>>>
}

/** Note */
export type NoteField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'NoteField'
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Key of the field */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
    /** HTML */
    valueMirror?: Maybe<Scalars['String']['output']>
  }

/** Number */
export type NumberField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'NumberField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<NumberFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<NumberFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<NumberFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Number Options */
    number?: Maybe<NumberFieldNumber>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type NumberFieldClasses = {
  __typename?: 'NumberFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type NumberFieldDescription = {
  __typename?: 'NumberFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type NumberFieldHelp = {
  __typename?: 'NumberFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Number Options */
export type NumberFieldNumber = {
  __typename?: 'NumberFieldNumber'
  /** Max */
  numMax?: Maybe<Scalars['Int']['output']>
  /** Min */
  numMin?: Maybe<Scalars['Int']['output']>
  /** Step */
  numStep?: Maybe<Scalars['String']['output']>
}

/** The cardinality of the connection order */
export enum OrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC',
}

/** The page type */
export type Page = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  MenuItemLinkable &
  Node &
  NodeWithAuthor &
  NodeWithComments &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithPageAttributes &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'Page'
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']['output']>
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<Scalars['Int']['output']>
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars['String']['output']>
    /** Connection between the page type and the Comment type */
    comments?: Maybe<PageToCommentConnection>
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the page object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether this page is set to the static front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether this page is set to the blog posts page. */
    isPostsPage: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether this page is set to the privacy page. */
    isPrivacyPage: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<Scalars['Int']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    pageId: Scalars['Int']['output']
    /** The parent of the node. The parent object can be of various types */
    parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the page type and the page type */
    preview?: Maybe<PageToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
    /** Connection between the page type and the page type */
    revisions?: Maybe<PageToRevisionConnection>
    /** The Yoast SEO data of the page */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the page type and the TermNode type */
    terms?: Maybe<PageToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<Page>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Page>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The page type */
export type PageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>
}

/** The page type */
export type PageChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>
}

/** The page type */
export type PageCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PageToCommentConnectionWhereArgs>
}

/** The page type */
export type PageContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The page type */
export type PageEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The page type */
export type PageEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The page type */
export type PageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PageToRevisionConnectionWhereArgs>
}

/** The page type */
export type PageTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PageToTermNodeConnectionWhereArgs>
}

/** The page type */
export type PageTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The page type */
export type PageTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the page type and the Comment type */
export type PageToCommentConnection = {
  __typename?: 'PageToCommentConnection'
  /** Edges for the PageToCommentConnection connection */
  edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
  __typename?: 'PageToCommentConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Comment>
}

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the page type and the page type */
export type PageToPreviewConnectionEdge = {
  __typename?: 'PageToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Page>
}

/** Connection between the page type and the page type */
export type PageToRevisionConnection = {
  __typename?: 'PageToRevisionConnection'
  /** Edges for the pageToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Page>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PageToRevisionConnectionEdge = {
  __typename?: 'PageToRevisionConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Page>
}

/** Arguments for filtering the pageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the page type and the TermNode type */
export type PageToTermNodeConnection = {
  __typename?: 'PageToTermNodeConnection'
  /** Edges for the PageToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<PageToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PageToTermNodeConnectionEdge = {
  __typename?: 'PageToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the PageToTermNodeConnection connection */
export type PageToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Password */
export type PasswordField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'PasswordField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<PasswordFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<PasswordFieldDescription>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<PasswordFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<PasswordFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type PasswordFieldClasses = {
  __typename?: 'PasswordFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type PasswordFieldDescription = {
  __typename?: 'PasswordFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type PasswordFieldHelp = {
  __typename?: 'PasswordFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type PasswordFieldInputLimitSet = {
  __typename?: 'PasswordFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** Password Confirm */
export type PasswordconfirmField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'PasswordconfirmField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<PasswordconfirmFieldClasses>
    /** Confirm */
    confirmField?: Maybe<Scalars['String']['output']>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<PasswordconfirmFieldDescription>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<PasswordconfirmFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<PasswordconfirmFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type PasswordconfirmFieldClasses = {
  __typename?: 'PasswordconfirmFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type PasswordconfirmFieldDescription = {
  __typename?: 'PasswordconfirmFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type PasswordconfirmFieldHelp = {
  __typename?: 'PasswordconfirmFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type PasswordconfirmFieldInputLimitSet = {
  __typename?: 'PasswordconfirmFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** Phone */
export type PhoneField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'PhoneField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<PhoneFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Mask */
    customMask?: Maybe<Scalars['String']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<PhoneFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<PhoneFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<PhoneFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Input Mask */
    mask?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type PhoneFieldClasses = {
  __typename?: 'PhoneFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type PhoneFieldDescription = {
  __typename?: 'PhoneFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type PhoneFieldHelp = {
  __typename?: 'PhoneFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type PhoneFieldInputLimitSet = {
  __typename?: 'PhoneFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin'
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']['output']>
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']['output']>
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']['output']>
  /** Plugin path. */
  path?: Maybe<Scalars['String']['output']>
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']['output']>
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']['output']>
}

/** The post type */
export type Post = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithAuthor &
  NodeWithComments &
  NodeWithContentEditor &
  NodeWithExcerpt &
  NodeWithFeaturedImage &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  NodeWithTrackbacks &
  UniformResourceIdentifiable & {
    __typename?: 'Post'
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']['output']>
    /** Connection between the post type and the category type */
    categories?: Maybe<PostToCategoryConnection>
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<Scalars['Int']['output']>
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars['String']['output']>
    /** Connection between the post type and the Comment type */
    comments?: Maybe<PostToCommentConnection>
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** The excerpt of the post. */
    excerpt?: Maybe<Scalars['String']['output']>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the post object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']['output']>
    /** Whether this page is sticky */
    isSticky: Scalars['Boolean']['output']
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: Maybe<Scalars['String']['output']>
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** Connection between the post type and the postFormat type */
    postFormats?: Maybe<PostToPostFormatConnection>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    postId: Scalars['Int']['output']
    /** Connection between the post type and the post type */
    preview?: Maybe<PostToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
    /** Connection between the post type and the post type */
    revisions?: Maybe<PostToRevisionConnection>
    /** The Yoast SEO data of the post */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** Connection between the post type and the tag type */
    tags?: Maybe<PostToTagConnection>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the post type and the TermNode type */
    terms?: Maybe<PostToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** Get specific translation version of this object */
    translation?: Maybe<Post>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Post>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The post type */
export type PostCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToCategoryConnectionWhereArgs>
}

/** The post type */
export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToCommentConnectionWhereArgs>
}

/** The post type */
export type PostContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The post type */
export type PostEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The post type */
export type PostExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToPostFormatConnectionWhereArgs>
}

/** The post type */
export type PostRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToRevisionConnectionWhereArgs>
}

/** The post type */
export type PostTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToTagConnectionWhereArgs>
}

/** The post type */
export type PostTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostToTermNodeConnectionWhereArgs>
}

/** The post type */
export type PostTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostTranslationArgs = {
  language: LanguageCodeEnum
}

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>
}

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The postFormat type */
export type PostFormat = DatabaseIdentifier &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'PostFormat'
    /** Connection between the postFormat type and the ContentNode type */
    contentNodes?: Maybe<PostFormatToContentNodeConnection>
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']['output']
    /** The description of the object */
    description?: Maybe<Scalars['String']['output']>
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
    /** The unique resource identifier path */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The link to the term */
    link?: Maybe<Scalars['String']['output']>
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    postFormatId?: Maybe<Scalars['Int']['output']>
    /** Connection between the postFormat type and the post type */
    posts?: Maybe<PostFormatToPostConnection>
    /** Connection between the postFormat type and the Review type */
    reviews?: Maybe<PostFormatToReviewConnection>
    /** The Yoast SEO data of the Форматы taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** Connection between the postFormat type and the Skill type */
    skills?: Maybe<PostFormatToSkillConnection>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the postFormat type and the Taxonomy type */
    taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The postFormat type */
export type PostFormatContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>
}

/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The postFormat type */
export type PostFormatPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostFormatToPostConnectionWhereArgs>
}

/** The postFormat type */
export type PostFormatReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostFormatToReviewConnectionWhereArgs>
}

/** The postFormat type */
export type PostFormatSkillsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PostFormatToSkillConnectionWhereArgs>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the postFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = {
  __typename?: 'PostFormatToContentNodeConnection'
  /** Edges for the PostFormatToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<PostFormatToContentNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = {
  __typename?: 'PostFormatToContentNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>
}

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the postFormat type and the post type */
export type PostFormatToPostConnection = {
  __typename?: 'PostFormatToPostConnection'
  /** Edges for the PostFormatToPostConnection connection */
  edges?: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = {
  __typename?: 'PostFormatToPostConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Post>
}

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the postFormat type and the Review type */
export type PostFormatToReviewConnection = {
  __typename?: 'PostFormatToReviewConnection'
  /** Edges for the PostFormatToReviewConnection connection */
  edges?: Maybe<Array<Maybe<PostFormatToReviewConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Review>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostFormatToReviewConnectionEdge = {
  __typename?: 'PostFormatToReviewConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Review>
}

/** Arguments for filtering the PostFormatToReviewConnection connection */
export type PostFormatToReviewConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the postFormat type and the Skill type */
export type PostFormatToSkillConnection = {
  __typename?: 'PostFormatToSkillConnection'
  /** Edges for the PostFormatToSkillConnection connection */
  edges?: Maybe<Array<Maybe<PostFormatToSkillConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Skill>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostFormatToSkillConnectionEdge = {
  __typename?: 'PostFormatToSkillConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Skill>
}

/** Arguments for filtering the PostFormatToSkillConnection connection */
export type PostFormatToSkillConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the postFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = {
  __typename?: 'PostFormatToTaxonomyConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Taxonomy>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED',
}

/** Union between the post, page and media item types */
export type PostObjectUnion =
  | AboutItem
  | ContactItem
  | FeedbackItem
  | FooterItem
  | Fragment
  | HeroItem
  | MediaItem
  | Messenger
  | NavigationItem
  | Page
  | Post
  | PrivacyPolicyItem
  | Recruit
  | Review
  | Skill
  | SocialNetwork

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED',
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE',
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum
  /** Possible directions in which to order a list of items */
  order: OrderEnum
}

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>
}

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>
}

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the post type and the category type */
export type PostToCategoryConnection = {
  __typename?: 'PostToCategoryConnection'
  /** Edges for the PostToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Category>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
  __typename?: 'PostToCategoryConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The Yoast SEO Primary category */
  isPrimary?: Maybe<Scalars['Boolean']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Category>
}

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the post type and the Comment type */
export type PostToCommentConnection = {
  __typename?: 'PostToCommentConnection'
  /** Edges for the PostToCommentConnection connection */
  edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
  __typename?: 'PostToCommentConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Comment>
}

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the post type and the postFormat type */
export type PostToPostFormatConnection = {
  __typename?: 'PostToPostFormatConnection'
  /** Edges for the PostToPostFormatConnection connection */
  edges?: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<PostFormat>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = {
  __typename?: 'PostToPostFormatConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The Yoast SEO Primary post_format */
  isPrimary?: Maybe<Scalars['Boolean']['output']>
  /** The item at the end of the edge */
  node?: Maybe<PostFormat>
}

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the post type and the post type */
export type PostToPreviewConnectionEdge = {
  __typename?: 'PostToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Post>
}

/** Connection between the post type and the post type */
export type PostToRevisionConnection = {
  __typename?: 'PostToRevisionConnection'
  /** Edges for the postToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToRevisionConnectionEdge = {
  __typename?: 'PostToRevisionConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Post>
}

/** Arguments for filtering the postToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the post type and the tag type */
export type PostToTagConnection = {
  __typename?: 'PostToTagConnection'
  /** Edges for the PostToTagConnection connection */
  edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToTagConnectionEdge = {
  __typename?: 'PostToTagConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The Yoast SEO Primary post_tag */
  isPrimary?: Maybe<Scalars['Boolean']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Tag>
}

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the post type and the TermNode type */
export type PostToTermNodeConnection = {
  __typename?: 'PostToTermNodeConnection'
  /** Edges for the PostToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<PostToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = {
  __typename?: 'PostToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails'
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']['output']>
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']['output']>
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']['output']>
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']['output']>
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']['output']>
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']['output']>
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']['output']>
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']['output']>
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']['output']>
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']['output']>
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']['output']>
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']['output']>
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']['output']>
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']['output']>
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']['output']>
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']['output']>
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']['output']>
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']['output']>
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']['output']>
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']['output']>
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']['output']>
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']['output']>
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']['output']>
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']['output']>
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']['output']>
}

export type PostTypeSeo = {
  __typename?: 'PostTypeSEO'
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>
  canonical?: Maybe<Scalars['String']['output']>
  cornerstone?: Maybe<Scalars['Boolean']['output']>
  focuskw?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaKeywords?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['String']['output']>
  opengraphAuthor?: Maybe<Scalars['String']['output']>
  opengraphDescription?: Maybe<Scalars['String']['output']>
  opengraphImage?: Maybe<MediaItem>
  opengraphModifiedTime?: Maybe<Scalars['String']['output']>
  opengraphPublishedTime?: Maybe<Scalars['String']['output']>
  opengraphPublisher?: Maybe<Scalars['String']['output']>
  opengraphSiteName?: Maybe<Scalars['String']['output']>
  opengraphTitle?: Maybe<Scalars['String']['output']>
  opengraphType?: Maybe<Scalars['String']['output']>
  opengraphUrl?: Maybe<Scalars['String']['output']>
  readingTime?: Maybe<Scalars['Float']['output']>
  schema?: Maybe<SeoPostTypeSchema>
  title?: Maybe<Scalars['String']['output']>
  twitterDescription?: Maybe<Scalars['String']['output']>
  twitterImage?: Maybe<MediaItem>
  twitterTitle?: Maybe<Scalars['String']['output']>
}

/** The PrivacyPolicyItem type */
export type PrivacyPolicyItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'PrivacyPolicyItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для контента&quot; was set to Show in GraphQL. */
    contentAddons?: Maybe<PrivacyPolicyItem_Contentaddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the privacy_policy object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the PrivacyPolicyItem type and the PrivacyPolicyItem type */
    preview?: Maybe<PrivacyPolicyItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    privacyPolicyItemId: Scalars['Int']['output']
    /** The Yoast SEO data of the PrivacyPolicyItem */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the PrivacyPolicyItem type and the TermNode type */
    terms?: Maybe<PrivacyPolicyItemToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<PrivacyPolicyItem>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<PrivacyPolicyItem>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The PrivacyPolicyItem type */
export type PrivacyPolicyItemContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The PrivacyPolicyItem type */
export type PrivacyPolicyItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The PrivacyPolicyItem type */
export type PrivacyPolicyItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The PrivacyPolicyItem type */
export type PrivacyPolicyItemTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PrivacyPolicyItemToTermNodeConnectionWhereArgs>
}

/** The PrivacyPolicyItem type */
export type PrivacyPolicyItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The PrivacyPolicyItem type */
export type PrivacyPolicyItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PrivacyPolicyItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the PrivacyPolicyItem type and the PrivacyPolicyItem type */
export type PrivacyPolicyItemToPreviewConnectionEdge = {
  __typename?: 'PrivacyPolicyItemToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<PrivacyPolicyItem>
}

/** Connection between the PrivacyPolicyItem type and the TermNode type */
export type PrivacyPolicyItemToTermNodeConnection = {
  __typename?: 'PrivacyPolicyItemToTermNodeConnection'
  /** Edges for the PrivacyPolicyItemToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<PrivacyPolicyItemToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PrivacyPolicyItemToTermNodeConnectionEdge = {
  __typename?: 'PrivacyPolicyItemToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the PrivacyPolicyItemToTermNodeConnection connection */
export type PrivacyPolicyItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type PrivacyPolicyItem_Contentaddons = AcfFieldGroup & {
  __typename?: 'PrivacyPolicyItem_Contentaddons'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  order?: Maybe<Scalars['Float']['output']>
  role?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Product */
export type ProductField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ProductField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ProductFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<ProductFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ProductFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Price */
    productPrice?: Maybe<Scalars['String']['output']>
    /** Product Type */
    productType?: Maybe<Scalars['String']['output']>
    /** Use Inline Quantity */
    productUseQuantity?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ProductFieldClasses = {
  __typename?: 'ProductFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ProductFieldDescription = {
  __typename?: 'ProductFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ProductFieldHelp = {
  __typename?: 'ProductFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Quantity */
export type QuantityField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'QuantityField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<QuantityFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<QuantityFieldDescription>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<QuantityFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Number Options */
    number?: Maybe<QuantityFieldNumber>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Product */
    productAssignment?: Maybe<Scalars['String']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type QuantityFieldClasses = {
  __typename?: 'QuantityFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type QuantityFieldDescription = {
  __typename?: 'QuantityFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type QuantityFieldHelp = {
  __typename?: 'QuantityFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Number Options */
export type QuantityFieldNumber = {
  __typename?: 'QuantityFieldNumber'
  /** Max */
  numMax?: Maybe<Scalars['Int']['output']>
  /** Min */
  numMin?: Maybe<Scalars['Int']['output']>
  /** Step */
  numStep?: Maybe<Scalars['String']['output']>
}

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings'
  /** Максимум страниц блога для показа. */
  postsPerPage?: Maybe<Scalars['Int']['output']>
}

/** Recaptcha */
export type RecaptchaField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'RecaptchaField'
    /** Custom Class Names */
    classes?: Maybe<RecaptchaFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Key of the field */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** Visibility */
    size?: Maybe<Scalars['String']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type RecaptchaFieldClasses = {
  __typename?: 'RecaptchaFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

export type Recaptcha_V3Field = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'Recaptcha_v3Field'
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Key of the field */
    key?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** The Recruit type */
export type Recruit = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'Recruit'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the recruit object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the Recruit type and the Recruit type */
    preview?: Maybe<RecruitToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    recruitId: Scalars['Int']['output']
    /** The Yoast SEO data of the Recruit */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the Recruit type and the TermNode type */
    terms?: Maybe<RecruitToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<Recruit>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Recruit>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The Recruit type */
export type RecruitContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Recruit type */
export type RecruitEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Recruit type */
export type RecruitEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Recruit type */
export type RecruitTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RecruitToTermNodeConnectionWhereArgs>
}

/** The Recruit type */
export type RecruitTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Recruit type */
export type RecruitTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum RecruitIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the Recruit type and the Recruit type */
export type RecruitToPreviewConnectionEdge = {
  __typename?: 'RecruitToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Recruit>
}

/** Connection between the Recruit type and the TermNode type */
export type RecruitToTermNodeConnection = {
  __typename?: 'RecruitToTermNodeConnection'
  /** Edges for the RecruitToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<RecruitToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RecruitToTermNodeConnectionEdge = {
  __typename?: 'RecruitToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the RecruitToTermNodeConnection connection */
export type RecruitToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Input for the registerUser mutation */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the user's username. */
  username: Scalars['String']['input']
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR',
}

/** Repeatable Fieldset */
export type RepeaterField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'RepeaterField'
    /** Custom Class Names */
    classes?: Maybe<RepeaterFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<RepeaterFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Key of the field */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type RepeaterFieldClasses = {
  __typename?: 'RepeaterFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type RepeaterFieldDescription = {
  __typename?: 'RepeaterFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Password reset key */
  key?: InputMaybe<Scalars['String']['input']>
  /** The user's login (username). */
  login?: InputMaybe<Scalars['String']['input']>
  /** The new password. */
  password?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the comment to be restored */
  id: Scalars['ID']['input']
}

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The restored comment object */
  comment?: Maybe<Comment>
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']['output']>
}

/** The Review type */
export type Review = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithPageAttributes &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'Review'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the review object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<Scalars['Int']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the Review type and the postFormat type */
    postFormats?: Maybe<ReviewToPostFormatConnection>
    /** Connection between the Review type and the Review type */
    preview?: Maybe<ReviewToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Отзыв&quot; was set to Show in GraphQL. */
    review?: Maybe<Review_Review>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    reviewId: Scalars['Int']['output']
    /** The Yoast SEO data of the Review */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the Review type and the TermNode type */
    terms?: Maybe<ReviewToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<Review>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Review>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The Review type */
export type ReviewContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Review type */
export type ReviewEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Review type */
export type ReviewEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Review type */
export type ReviewPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewToPostFormatConnectionWhereArgs>
}

/** The Review type */
export type ReviewTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewToTermNodeConnectionWhereArgs>
}

/** The Review type */
export type ReviewTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Review type */
export type ReviewTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ReviewIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Set relationships between the Review to postFormats */
export type ReviewPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<ReviewPostFormatsNodeInput>>>
}

/** List of postFormats to connect the Review to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ReviewPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat. If present, this will be used to connect to the Review. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Review type and the postFormat type */
export type ReviewToPostFormatConnection = {
  __typename?: 'ReviewToPostFormatConnection'
  /** Edges for the ReviewToPostFormatConnection connection */
  edges?: Maybe<Array<Maybe<ReviewToPostFormatConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<PostFormat>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type ReviewToPostFormatConnectionEdge = {
  __typename?: 'ReviewToPostFormatConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The Yoast SEO Primary post_format */
  isPrimary?: Maybe<Scalars['Boolean']['output']>
  /** The item at the end of the edge */
  node?: Maybe<PostFormat>
}

/** Arguments for filtering the ReviewToPostFormatConnection connection */
export type ReviewToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Review type and the Review type */
export type ReviewToPreviewConnectionEdge = {
  __typename?: 'ReviewToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Review>
}

/** Connection between the Review type and the TermNode type */
export type ReviewToTermNodeConnection = {
  __typename?: 'ReviewToTermNodeConnection'
  /** Edges for the ReviewToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<ReviewToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type ReviewToTermNodeConnectionEdge = {
  __typename?: 'ReviewToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the ReviewToTermNodeConnection connection */
export type ReviewToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Field Group */
export type Review_Review = AcfFieldGroup & {
  __typename?: 'Review_Review'
  /** Состав ссылки: https:// + domain + .zone */
  companylink?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Выберите с кем работали */
  position?: Maybe<Scalars['String']['output']>
  /** Имя, оставляющего отзыв, человека */
  respondent?: Maybe<Scalars['String']['output']>
  skills?: Maybe<Array<Maybe<Review_Review_Skills>>>
}

export type Review_Review_Skills = Skill

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation'
  /** The payload for the createAboutItem mutation */
  createAboutItem?: Maybe<CreateAboutItemPayload>
  /** The payload for the createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>
  /** The payload for the createComment mutation */
  createComment?: Maybe<CreateCommentPayload>
  /** The payload for the createContactItem mutation */
  createContactItem?: Maybe<CreateContactItemPayload>
  /** The payload for the createFeedbackItem mutation */
  createFeedbackItem?: Maybe<CreateFeedbackItemPayload>
  /** The payload for the createFooterItem mutation */
  createFooterItem?: Maybe<CreateFooterItemPayload>
  /** The payload for the createFragment mutation */
  createFragment?: Maybe<CreateFragmentPayload>
  /** The payload for the createHeroItem mutation */
  createHeroItem?: Maybe<CreateHeroItemPayload>
  /** The payload for the createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>
  /** The payload for the createMessenger mutation */
  createMessenger?: Maybe<CreateMessengerPayload>
  /** The payload for the createNavigationItem mutation */
  createNavigationItem?: Maybe<CreateNavigationItemPayload>
  /** The payload for the createPage mutation */
  createPage?: Maybe<CreatePagePayload>
  /** The payload for the createPost mutation */
  createPost?: Maybe<CreatePostPayload>
  /** The payload for the createPostFormat mutation */
  createPostFormat?: Maybe<CreatePostFormatPayload>
  /** The payload for the createPrivacyPolicyItem mutation */
  createPrivacyPolicyItem?: Maybe<CreatePrivacyPolicyItemPayload>
  /** The payload for the createRecruit mutation */
  createRecruit?: Maybe<CreateRecruitPayload>
  /** The payload for the createReview mutation */
  createReview?: Maybe<CreateReviewPayload>
  /** The payload for the createSkill mutation */
  createSkill?: Maybe<CreateSkillPayload>
  /** The payload for the createSkillCategory mutation */
  createSkillCategory?: Maybe<CreateSkillCategoryPayload>
  /** The payload for the createSocialNetwork mutation */
  createSocialNetwork?: Maybe<CreateSocialNetworkPayload>
  /** The payload for the createTag mutation */
  createTag?: Maybe<CreateTagPayload>
  /** The payload for the createUser mutation */
  createUser?: Maybe<CreateUserPayload>
  /** The payload for the deleteAboutItem mutation */
  deleteAboutItem?: Maybe<DeleteAboutItemPayload>
  /** The payload for the deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>
  /** The payload for the deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>
  /** The payload for the deleteContactItem mutation */
  deleteContactItem?: Maybe<DeleteContactItemPayload>
  /** The payload for the deleteFeedbackItem mutation */
  deleteFeedbackItem?: Maybe<DeleteFeedbackItemPayload>
  /** The payload for the deleteFooterItem mutation */
  deleteFooterItem?: Maybe<DeleteFooterItemPayload>
  /** The payload for the deleteFragment mutation */
  deleteFragment?: Maybe<DeleteFragmentPayload>
  /** The payload for the deleteHeroItem mutation */
  deleteHeroItem?: Maybe<DeleteHeroItemPayload>
  /** The payload for the deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>
  /** The payload for the deleteMessenger mutation */
  deleteMessenger?: Maybe<DeleteMessengerPayload>
  /** The payload for the deleteNavigationItem mutation */
  deleteNavigationItem?: Maybe<DeleteNavigationItemPayload>
  /** The payload for the deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>
  /** The payload for the deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>
  /** The payload for the deletePostFormat mutation */
  deletePostFormat?: Maybe<DeletePostFormatPayload>
  /** The payload for the deletePrivacyPolicyItem mutation */
  deletePrivacyPolicyItem?: Maybe<DeletePrivacyPolicyItemPayload>
  /** The payload for the deleteRecruit mutation */
  deleteRecruit?: Maybe<DeleteRecruitPayload>
  /** The payload for the deleteReview mutation */
  deleteReview?: Maybe<DeleteReviewPayload>
  /** The payload for the deleteSkill mutation */
  deleteSkill?: Maybe<DeleteSkillPayload>
  /** The payload for the deleteSkillCategory mutation */
  deleteSkillCategory?: Maybe<DeleteSkillCategoryPayload>
  /** The payload for the deleteSocialNetwork mutation */
  deleteSocialNetwork?: Maybe<DeleteSocialNetworkPayload>
  /** The payload for the deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>
  /** The payload for the deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>
  /** Increase the count. */
  increaseCount?: Maybe<Scalars['Int']['output']>
  /** The payload for the registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>
  /** The payload for the resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>
  /** The payload for the restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>
  /** The payload for the sendPasswordResetEmail mutation */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>
  /** The payload for the submitForm mutation */
  submitForm?: Maybe<SubmitFormPayload>
  /** The payload for the updateAboutItem mutation */
  updateAboutItem?: Maybe<UpdateAboutItemPayload>
  /** The payload for the UpdateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>
  /** The payload for the updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>
  /** The payload for the updateContactItem mutation */
  updateContactItem?: Maybe<UpdateContactItemPayload>
  /** The payload for the updateFeedbackItem mutation */
  updateFeedbackItem?: Maybe<UpdateFeedbackItemPayload>
  /** The payload for the updateFooterItem mutation */
  updateFooterItem?: Maybe<UpdateFooterItemPayload>
  /** The payload for the updateFragment mutation */
  updateFragment?: Maybe<UpdateFragmentPayload>
  /** The payload for the updateHeroItem mutation */
  updateHeroItem?: Maybe<UpdateHeroItemPayload>
  /** The payload for the updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>
  /** The payload for the updateMessenger mutation */
  updateMessenger?: Maybe<UpdateMessengerPayload>
  /** The payload for the updateNavigationItem mutation */
  updateNavigationItem?: Maybe<UpdateNavigationItemPayload>
  /** The payload for the updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>
  /** The payload for the updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>
  /** The payload for the UpdatePostFormat mutation */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>
  /** The payload for the updatePrivacyPolicyItem mutation */
  updatePrivacyPolicyItem?: Maybe<UpdatePrivacyPolicyItemPayload>
  /** The payload for the updateRecruit mutation */
  updateRecruit?: Maybe<UpdateRecruitPayload>
  /** The payload for the updateReview mutation */
  updateReview?: Maybe<UpdateReviewPayload>
  /** The payload for the updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>
  /** The payload for the updateSkill mutation */
  updateSkill?: Maybe<UpdateSkillPayload>
  /** The payload for the UpdateSkillCategory mutation */
  updateSkillCategory?: Maybe<UpdateSkillCategoryPayload>
  /** The payload for the updateSocialNetwork mutation */
  updateSocialNetwork?: Maybe<UpdateSocialNetworkPayload>
  /** The payload for the UpdateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>
  /** The payload for the updateUser mutation */
  updateUser?: Maybe<UpdateUserPayload>
}

/** The root mutation */
export type RootMutationCreateAboutItemArgs = {
  input: CreateAboutItemInput
}

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput
}

/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput
}

/** The root mutation */
export type RootMutationCreateContactItemArgs = {
  input: CreateContactItemInput
}

/** The root mutation */
export type RootMutationCreateFeedbackItemArgs = {
  input: CreateFeedbackItemInput
}

/** The root mutation */
export type RootMutationCreateFooterItemArgs = {
  input: CreateFooterItemInput
}

/** The root mutation */
export type RootMutationCreateFragmentArgs = {
  input: CreateFragmentInput
}

/** The root mutation */
export type RootMutationCreateHeroItemArgs = {
  input: CreateHeroItemInput
}

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput
}

/** The root mutation */
export type RootMutationCreateMessengerArgs = {
  input: CreateMessengerInput
}

/** The root mutation */
export type RootMutationCreateNavigationItemArgs = {
  input: CreateNavigationItemInput
}

/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput
}

/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput
}

/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput
}

/** The root mutation */
export type RootMutationCreatePrivacyPolicyItemArgs = {
  input: CreatePrivacyPolicyItemInput
}

/** The root mutation */
export type RootMutationCreateRecruitArgs = {
  input: CreateRecruitInput
}

/** The root mutation */
export type RootMutationCreateReviewArgs = {
  input: CreateReviewInput
}

/** The root mutation */
export type RootMutationCreateSkillArgs = {
  input: CreateSkillInput
}

/** The root mutation */
export type RootMutationCreateSkillCategoryArgs = {
  input: CreateSkillCategoryInput
}

/** The root mutation */
export type RootMutationCreateSocialNetworkArgs = {
  input: CreateSocialNetworkInput
}

/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput
}

/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput
}

/** The root mutation */
export type RootMutationDeleteAboutItemArgs = {
  input: DeleteAboutItemInput
}

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput
}

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput
}

/** The root mutation */
export type RootMutationDeleteContactItemArgs = {
  input: DeleteContactItemInput
}

/** The root mutation */
export type RootMutationDeleteFeedbackItemArgs = {
  input: DeleteFeedbackItemInput
}

/** The root mutation */
export type RootMutationDeleteFooterItemArgs = {
  input: DeleteFooterItemInput
}

/** The root mutation */
export type RootMutationDeleteFragmentArgs = {
  input: DeleteFragmentInput
}

/** The root mutation */
export type RootMutationDeleteHeroItemArgs = {
  input: DeleteHeroItemInput
}

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput
}

/** The root mutation */
export type RootMutationDeleteMessengerArgs = {
  input: DeleteMessengerInput
}

/** The root mutation */
export type RootMutationDeleteNavigationItemArgs = {
  input: DeleteNavigationItemInput
}

/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput
}

/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput
}

/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput
}

/** The root mutation */
export type RootMutationDeletePrivacyPolicyItemArgs = {
  input: DeletePrivacyPolicyItemInput
}

/** The root mutation */
export type RootMutationDeleteRecruitArgs = {
  input: DeleteRecruitInput
}

/** The root mutation */
export type RootMutationDeleteReviewArgs = {
  input: DeleteReviewInput
}

/** The root mutation */
export type RootMutationDeleteSkillArgs = {
  input: DeleteSkillInput
}

/** The root mutation */
export type RootMutationDeleteSkillCategoryArgs = {
  input: DeleteSkillCategoryInput
}

/** The root mutation */
export type RootMutationDeleteSocialNetworkArgs = {
  input: DeleteSocialNetworkInput
}

/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput
}

/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput
}

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: InputMaybe<Scalars['Int']['input']>
}

/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput
}

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput
}

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput
}

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput
}

/** The root mutation */
export type RootMutationSubmitFormArgs = {
  input: SubmitFormInput
}

/** The root mutation */
export type RootMutationUpdateAboutItemArgs = {
  input: UpdateAboutItemInput
}

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput
}

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput
}

/** The root mutation */
export type RootMutationUpdateContactItemArgs = {
  input: UpdateContactItemInput
}

/** The root mutation */
export type RootMutationUpdateFeedbackItemArgs = {
  input: UpdateFeedbackItemInput
}

/** The root mutation */
export type RootMutationUpdateFooterItemArgs = {
  input: UpdateFooterItemInput
}

/** The root mutation */
export type RootMutationUpdateFragmentArgs = {
  input: UpdateFragmentInput
}

/** The root mutation */
export type RootMutationUpdateHeroItemArgs = {
  input: UpdateHeroItemInput
}

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput
}

/** The root mutation */
export type RootMutationUpdateMessengerArgs = {
  input: UpdateMessengerInput
}

/** The root mutation */
export type RootMutationUpdateNavigationItemArgs = {
  input: UpdateNavigationItemInput
}

/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput
}

/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput
}

/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput
}

/** The root mutation */
export type RootMutationUpdatePrivacyPolicyItemArgs = {
  input: UpdatePrivacyPolicyItemInput
}

/** The root mutation */
export type RootMutationUpdateRecruitArgs = {
  input: UpdateRecruitInput
}

/** The root mutation */
export type RootMutationUpdateReviewArgs = {
  input: UpdateReviewInput
}

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput
}

/** The root mutation */
export type RootMutationUpdateSkillArgs = {
  input: UpdateSkillInput
}

/** The root mutation */
export type RootMutationUpdateSkillCategoryArgs = {
  input: UpdateSkillCategoryInput
}

/** The root mutation */
export type RootMutationUpdateSocialNetworkArgs = {
  input: UpdateSocialNetworkInput
}

/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput
}

/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput
}

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery'
  /** An object of the AboutItem Type.  */
  aboutItem?: Maybe<AboutItem>
  /**
   * A AboutItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  aboutItemBy?: Maybe<AboutItem>
  /** Connection between the RootQuery type and the AboutItem type */
  aboutItems?: Maybe<RootQueryToAboutItemConnection>
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<Settings>
  /** Connection between the RootQuery type and the category type */
  categories?: Maybe<RootQueryToCategoryConnection>
  /** A 0bject */
  category?: Maybe<Category>
  /** Returns a Comment */
  comment?: Maybe<Comment>
  /** Connection between the RootQuery type and the Comment type */
  comments?: Maybe<RootQueryToCommentConnection>
  /** An object of the ContactItem Type.  */
  contactItem?: Maybe<ContactItem>
  /**
   * A ContactItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  contactItemBy?: Maybe<ContactItem>
  /** Connection between the RootQuery type and the ContactItem type */
  contactItems?: Maybe<RootQueryToContactItemConnection>
  /** A node used to manage content */
  contentNode?: Maybe<ContentNode>
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>
  /** Fetch a Content Type node by unique Identifier */
  contentType?: Maybe<ContentType>
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>
  /** Get language list */
  defaultLanguage?: Maybe<Language>
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<DiscussionSettings>
  /** An object of the FeedbackItem Type.  */
  feedbackItem?: Maybe<FeedbackItem>
  /**
   * A FeedbackItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  feedbackItemBy?: Maybe<FeedbackItem>
  /** Connection between the RootQuery type and the FeedbackItem type */
  feedbackItems?: Maybe<RootQueryToFeedbackItemConnection>
  /** An object of the FooterItem Type.  */
  footerItem?: Maybe<FooterItem>
  /**
   * A FooterItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  footerItemBy?: Maybe<FooterItem>
  /** Connection between the RootQuery type and the FooterItem type */
  footerItems?: Maybe<RootQueryToFooterItemConnection>
  /** Ninja form object data. */
  form?: Maybe<Form>
  formField?: Maybe<FormField>
  /** Connection between the RootQuery type and the Form type */
  forms?: Maybe<RootQueryToFormConnection>
  /** An object of the Fragment Type.  */
  fragment?: Maybe<Fragment>
  /**
   * A Fragment object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  fragmentBy?: Maybe<Fragment>
  /** Connection between the RootQuery type and the Fragment type */
  fragments?: Maybe<RootQueryToFragmentConnection>
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<GeneralSettings>
  /** An object of the HeroItem Type.  */
  heroItem?: Maybe<HeroItem>
  /**
   * A HeroItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  heroItemBy?: Maybe<HeroItem>
  /** Connection between the RootQuery type and the HeroItem type */
  heroItems?: Maybe<RootQueryToHeroItemConnection>
  /** List available languages */
  languages?: Maybe<Array<Maybe<Language>>>
  /** An object of the mediaItem Type.  */
  mediaItem?: Maybe<MediaItem>
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>
  /** A WordPress navigation menu */
  menu?: Maybe<Menu>
  /** A WordPress navigation menu item */
  menuItem?: Maybe<MenuItem>
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems?: Maybe<RootQueryToMenuItemConnection>
  /** Connection between the RootQuery type and the Menu type */
  menus?: Maybe<RootQueryToMenuConnection>
  /** An object of the Messenger Type.  */
  messenger?: Maybe<Messenger>
  /**
   * A Messenger object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  messengerBy?: Maybe<Messenger>
  /** Connection between the RootQuery type and the Messenger type */
  messengers?: Maybe<RootQueryToMessengerConnection>
  /** An object of the NavigationItem Type.  */
  navigationItem?: Maybe<NavigationItem>
  /**
   * A NavigationItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  navigationItemBy?: Maybe<NavigationItem>
  /** Connection between the RootQuery type and the NavigationItem type */
  navigationItems?: Maybe<RootQueryToNavigationItemConnection>
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Fetches an object given its Unique Resource Identifier */
  nodeByUri?: Maybe<UniformResourceIdentifiable>
  /** An object of the page Type.  */
  page?: Maybe<Page>
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>
  /** Connection between the RootQuery type and the page type */
  pages?: Maybe<RootQueryToPageConnection>
  /** A WordPress plugin */
  plugin?: Maybe<Plugin>
  /** Connection between the RootQuery type and the Plugin type */
  plugins?: Maybe<RootQueryToPluginConnection>
  /** An object of the post Type.  */
  post?: Maybe<Post>
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>
  /** A 0bject */
  postFormat?: Maybe<PostFormat>
  /** Connection between the RootQuery type and the postFormat type */
  postFormats?: Maybe<RootQueryToPostFormatConnection>
  /** Connection between the RootQuery type and the post type */
  posts?: Maybe<RootQueryToPostConnection>
  /** An object of the PrivacyPolicyItem Type.  */
  privacyPolicyItem?: Maybe<PrivacyPolicyItem>
  /**
   * A PrivacyPolicyItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  privacyPolicyItemBy?: Maybe<PrivacyPolicyItem>
  /** Connection between the RootQuery type and the PrivacyPolicyItem type */
  privacyPolicyItems?: Maybe<RootQueryToPrivacyPolicyItemConnection>
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<ReadingSettings>
  /** An object of the Recruit Type.  */
  recruit?: Maybe<Recruit>
  /**
   * A Recruit object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  recruitBy?: Maybe<Recruit>
  /** Connection between the RootQuery type and the Recruit type */
  recruits?: Maybe<RootQueryToRecruitConnection>
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>
  /** An object of the Review Type.  */
  review?: Maybe<Review>
  /**
   * A Review object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  reviewBy?: Maybe<Review>
  /** Connection between the RootQuery type and the Review type */
  reviews?: Maybe<RootQueryToReviewConnection>
  /** Connection between the RootQuery type and the ContentRevisionUnion type */
  revisions?: Maybe<RootQueryToContentRevisionUnionConnection>
  /** Returns seo site data */
  seo?: Maybe<SeoConfig>
  /** An object of the Skill Type.  */
  skill?: Maybe<Skill>
  /**
   * A Skill object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  skillBy?: Maybe<Skill>
  /** Connection between the RootQuery type and the SkillCategory type */
  skillCategories?: Maybe<RootQueryToSkillCategoryConnection>
  /** A 0bject */
  skillCategory?: Maybe<SkillCategory>
  /** Connection between the RootQuery type and the Skill type */
  skills?: Maybe<RootQueryToSkillConnection>
  /** An object of the SocialNetwork Type.  */
  socialNetwork?: Maybe<SocialNetwork>
  /**
   * A SocialNetwork object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  socialNetworkBy?: Maybe<SocialNetwork>
  /** Connection between the RootQuery type and the SocialNetwork type */
  socialNetworks?: Maybe<RootQueryToSocialNetworkConnection>
  /** A 0bject */
  tag?: Maybe<Tag>
  /** Connection between the RootQuery type and the tag type */
  tags?: Maybe<RootQueryToTagConnection>
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy?: Maybe<Taxonomy>
  /** A node in a taxonomy used to group and relate content nodes */
  termNode?: Maybe<TermNode>
  /** Connection between the RootQuery type and the TermNode type */
  terms?: Maybe<RootQueryToTermNodeConnection>
  /** A Theme object */
  theme?: Maybe<Theme>
  /** Connection between the RootQuery type and the Theme type */
  themes?: Maybe<RootQueryToThemeConnection>
  /** Translate string using pll_translate_string() (Polylang) */
  translateString?: Maybe<Scalars['String']['output']>
  /** Returns a user */
  user?: Maybe<User>
  /** Returns a user role */
  userRole?: Maybe<UserRole>
  /** Connection between the RootQuery type and the UserRole type */
  userRoles?: Maybe<RootQueryToUserRoleConnection>
  /** Connection between the RootQuery type and the User type */
  users?: Maybe<RootQueryToUserConnection>
  /** Returns the current user */
  viewer?: Maybe<User>
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WritingSettings>
}

/** The root entry point into the Graph */
export type RootQueryAboutItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<AboutItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryAboutItemByArgs = {
  aboutItemId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryAboutItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToAboutItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToCategoryConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<CategoryIdType>
}

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID']['input']
}

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToCommentConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryContactItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<ContactItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryContactItemByArgs = {
  contactItemId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryContactItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToContactItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  contentType?: InputMaybe<ContentTypeEnum>
  id: Scalars['ID']['input']
  idType?: InputMaybe<ContentNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<ContentTypeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryFeedbackItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<FeedbackItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryFeedbackItemByArgs = {
  feedbackItemId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryFeedbackItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToFeedbackItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryFooterItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<FooterItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryFooterItemByArgs = {
  footerItemId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryFooterItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToFooterItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryFormArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<FormIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryFormFieldArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<FormIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryFragmentArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<FragmentIdType>
}

/** The root entry point into the Graph */
export type RootQueryFragmentByArgs = {
  fragmentId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryFragmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToFragmentConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryHeroItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<HeroItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryHeroItemByArgs = {
  heroItemId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryHeroItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToHeroItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<MediaItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  mediaItemId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<MenuNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<MenuItemNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToMenuConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMessengerArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<MessengerIdType>
}

/** The root entry point into the Graph */
export type RootQueryMessengerByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  messengerId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryMessengersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToMessengerConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryNavigationItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<NavigationItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryNavigationItemByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  navigationItemId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryNavigationItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToNavigationItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String']['input']
}

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<PageIdType>
}

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  pageId?: InputMaybe<Scalars['Int']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToPageConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID']['input']
}

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<PostIdType>
}

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  postId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<PostFormatIdType>
}

/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToPostConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPrivacyPolicyItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<PrivacyPolicyItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryPrivacyPolicyItemByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  privacyPolicyItemId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryPrivacyPolicyItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToPrivacyPolicyItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryRecruitArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<RecruitIdType>
}

/** The root entry point into the Graph */
export type RootQueryRecruitByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  recruitId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryRecruitsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToRecruitConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryReviewArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<ReviewIdType>
}

/** The root entry point into the Graph */
export type RootQueryReviewByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  reviewId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToReviewConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToContentRevisionUnionConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQuerySkillArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<SkillIdType>
}

/** The root entry point into the Graph */
export type RootQuerySkillByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  skillId?: InputMaybe<Scalars['Int']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQuerySkillCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToSkillCategoryConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQuerySkillCategoryArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<SkillCategoryIdType>
}

/** The root entry point into the Graph */
export type RootQuerySkillsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToSkillConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQuerySocialNetworkArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<SocialNetworkIdType>
}

/** The root entry point into the Graph */
export type RootQuerySocialNetworkByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  socialNetworkId?: InputMaybe<Scalars['Int']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQuerySocialNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToSocialNetworkConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<TagIdType>
}

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToTagConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<TaxonomyIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<TermNodeIdTypeEnum>
  taxonomy?: InputMaybe<TaxonomyEnum>
}

/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID']['input']
}

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryTranslateStringArgs = {
  language: LanguageCodeEnum
  string: Scalars['String']['input']
}

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<UserNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID']['input']
}

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToUserConnectionWhereArgs>
}

/** Connection between the RootQuery type and the AboutItem type */
export type RootQueryToAboutItemConnection = {
  __typename?: 'RootQueryToAboutItemConnection'
  /** Edges for the RootQueryToAboutItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToAboutItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<AboutItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToAboutItemConnectionEdge = {
  __typename?: 'RootQueryToAboutItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<AboutItem>
}

/** Arguments for filtering the RootQueryToAboutItemConnection connection */
export type RootQueryToAboutItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by AboutItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = {
  __typename?: 'RootQueryToCategoryConnection'
  /** Edges for the RootQueryToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Category>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
  __typename?: 'RootQueryToCategoryConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Category>
}

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by Categorys by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = {
  __typename?: 'RootQueryToCommentConnection'
  /** Edges for the RootQueryToCommentConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
  __typename?: 'RootQueryToCommentConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Comment>
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the RootQuery type and the ContactItem type */
export type RootQueryToContactItemConnection = {
  __typename?: 'RootQueryToContactItemConnection'
  /** Edges for the RootQueryToContactItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToContactItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContactItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToContactItemConnectionEdge = {
  __typename?: 'RootQueryToContactItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContactItem>
}

/** Arguments for filtering the RootQueryToContactItemConnection connection */
export type RootQueryToContactItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by ContactItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = {
  __typename?: 'RootQueryToContentNodeConnection'
  /** Edges for the RootQueryToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = {
  __typename?: 'RootQueryToContentNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>
}

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter content nodes by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type RootQueryToContentRevisionUnionConnection = {
  __typename?: 'RootQueryToContentRevisionUnionConnection'
  /** Edges for the RootQueryToContentRevisionUnionConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToContentRevisionUnionConnectionEdge = {
  __typename?: 'RootQueryToContentRevisionUnionConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentRevisionUnion>
}

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = {
  __typename?: 'RootQueryToContentTypeConnection'
  /** Edges for the RootQueryToContentTypeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentType>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = {
  __typename?: 'RootQueryToContentTypeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentType>
}

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = {
  __typename?: 'RootQueryToEnqueuedScriptConnection'
  /** Edges for the RootQueryToEnqueuedScriptConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedScript>
}

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection'
  /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedStylesheet>
}

/** Connection between the RootQuery type and the FeedbackItem type */
export type RootQueryToFeedbackItemConnection = {
  __typename?: 'RootQueryToFeedbackItemConnection'
  /** Edges for the RootQueryToFeedbackItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToFeedbackItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<FeedbackItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToFeedbackItemConnectionEdge = {
  __typename?: 'RootQueryToFeedbackItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<FeedbackItem>
}

/** Arguments for filtering the RootQueryToFeedbackItemConnection connection */
export type RootQueryToFeedbackItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by FeedbackItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the FooterItem type */
export type RootQueryToFooterItemConnection = {
  __typename?: 'RootQueryToFooterItemConnection'
  /** Edges for the RootQueryToFooterItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToFooterItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<FooterItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToFooterItemConnectionEdge = {
  __typename?: 'RootQueryToFooterItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<FooterItem>
}

/** Arguments for filtering the RootQueryToFooterItemConnection connection */
export type RootQueryToFooterItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by FooterItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the Form type */
export type RootQueryToFormConnection = {
  __typename?: 'RootQueryToFormConnection'
  /** Edges for the RootQueryToFormConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToFormConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Form>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToFormConnectionEdge = {
  __typename?: 'RootQueryToFormConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Form>
}

/** Connection between the RootQuery type and the Fragment type */
export type RootQueryToFragmentConnection = {
  __typename?: 'RootQueryToFragmentConnection'
  /** Edges for the RootQueryToFragmentConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToFragmentConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Fragment>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToFragmentConnectionEdge = {
  __typename?: 'RootQueryToFragmentConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Fragment>
}

/** Arguments for filtering the RootQueryToFragmentConnection connection */
export type RootQueryToFragmentConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by Fragments by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the HeroItem type */
export type RootQueryToHeroItemConnection = {
  __typename?: 'RootQueryToHeroItemConnection'
  /** Edges for the RootQueryToHeroItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToHeroItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<HeroItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToHeroItemConnectionEdge = {
  __typename?: 'RootQueryToHeroItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<HeroItem>
}

/** Arguments for filtering the RootQueryToHeroItemConnection connection */
export type RootQueryToHeroItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by HeroItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = {
  __typename?: 'RootQueryToMediaItemConnection'
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MediaItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
  __typename?: 'RootQueryToMediaItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<MediaItem>
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by MediaItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = {
  __typename?: 'RootQueryToMenuConnection'
  /** Edges for the RootQueryToMenuConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Menu>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
  __typename?: 'RootQueryToMenuConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Menu>
}

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The slug of the menu to query items for */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = {
  __typename?: 'RootQueryToMenuItemConnection'
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
  __typename?: 'RootQueryToMenuItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>
}

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the RootQuery type and the Messenger type */
export type RootQueryToMessengerConnection = {
  __typename?: 'RootQueryToMessengerConnection'
  /** Edges for the RootQueryToMessengerConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToMessengerConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Messenger>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMessengerConnectionEdge = {
  __typename?: 'RootQueryToMessengerConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Messenger>
}

/** Arguments for filtering the RootQueryToMessengerConnection connection */
export type RootQueryToMessengerConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the NavigationItem type */
export type RootQueryToNavigationItemConnection = {
  __typename?: 'RootQueryToNavigationItemConnection'
  /** Edges for the RootQueryToNavigationItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToNavigationItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<NavigationItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToNavigationItemConnectionEdge = {
  __typename?: 'RootQueryToNavigationItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<NavigationItem>
}

/** Arguments for filtering the RootQueryToNavigationItemConnection connection */
export type RootQueryToNavigationItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by NavigationItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = {
  __typename?: 'RootQueryToPageConnection'
  /** Edges for the RootQueryToPageConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Page>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
  __typename?: 'RootQueryToPageConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Page>
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by Pages by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = {
  __typename?: 'RootQueryToPluginConnection'
  /** Edges for the RootQueryToPluginConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Plugin>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
  __typename?: 'RootQueryToPluginConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Plugin>
}

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = {
  __typename?: 'RootQueryToPostConnection'
  /** Edges for the RootQueryToPostConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
  __typename?: 'RootQueryToPostConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Post>
}

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by Posts by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = {
  __typename?: 'RootQueryToPostFormatConnection'
  /** Edges for the RootQueryToPostFormatConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<PostFormat>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = {
  __typename?: 'RootQueryToPostFormatConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<PostFormat>
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the PrivacyPolicyItem type */
export type RootQueryToPrivacyPolicyItemConnection = {
  __typename?: 'RootQueryToPrivacyPolicyItemConnection'
  /** Edges for the RootQueryToPrivacyPolicyItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPrivacyPolicyItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<PrivacyPolicyItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPrivacyPolicyItemConnectionEdge = {
  __typename?: 'RootQueryToPrivacyPolicyItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<PrivacyPolicyItem>
}

/** Arguments for filtering the RootQueryToPrivacyPolicyItemConnection connection */
export type RootQueryToPrivacyPolicyItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by PrivacyPolicyItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the Recruit type */
export type RootQueryToRecruitConnection = {
  __typename?: 'RootQueryToRecruitConnection'
  /** Edges for the RootQueryToRecruitConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToRecruitConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Recruit>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToRecruitConnectionEdge = {
  __typename?: 'RootQueryToRecruitConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Recruit>
}

/** Arguments for filtering the RootQueryToRecruitConnection connection */
export type RootQueryToRecruitConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by Recruits by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the Review type */
export type RootQueryToReviewConnection = {
  __typename?: 'RootQueryToReviewConnection'
  /** Edges for the RootQueryToReviewConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToReviewConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Review>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToReviewConnectionEdge = {
  __typename?: 'RootQueryToReviewConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Review>
}

/** Arguments for filtering the RootQueryToReviewConnection connection */
export type RootQueryToReviewConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by Reviews by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the SkillCategory type */
export type RootQueryToSkillCategoryConnection = {
  __typename?: 'RootQueryToSkillCategoryConnection'
  /** Edges for the RootQueryToSkillCategoryConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToSkillCategoryConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<SkillCategory>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToSkillCategoryConnectionEdge = {
  __typename?: 'RootQueryToSkillCategoryConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<SkillCategory>
}

/** Arguments for filtering the RootQueryToSkillCategoryConnection connection */
export type RootQueryToSkillCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by SkillCategorys by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Skill type */
export type RootQueryToSkillConnection = {
  __typename?: 'RootQueryToSkillConnection'
  /** Edges for the RootQueryToSkillConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToSkillConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Skill>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToSkillConnectionEdge = {
  __typename?: 'RootQueryToSkillConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Skill>
}

/** Arguments for filtering the RootQueryToSkillConnection connection */
export type RootQueryToSkillConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by Skills by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the SocialNetwork type */
export type RootQueryToSocialNetworkConnection = {
  __typename?: 'RootQueryToSocialNetworkConnection'
  /** Edges for the RootQueryToSocialNetworkConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToSocialNetworkConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<SocialNetwork>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToSocialNetworkConnectionEdge = {
  __typename?: 'RootQueryToSocialNetworkConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<SocialNetwork>
}

/** Arguments for filtering the RootQueryToSocialNetworkConnection connection */
export type RootQueryToSocialNetworkConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = {
  __typename?: 'RootQueryToTagConnection'
  /** Edges for the RootQueryToTagConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
  __typename?: 'RootQueryToTagConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Tag>
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter by Tags by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = {
  __typename?: 'RootQueryToTaxonomyConnection'
  /** Edges for the RootQueryToTaxonomyConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = {
  __typename?: 'RootQueryToTaxonomyConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Taxonomy>
}

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = {
  __typename?: 'RootQueryToTermNodeConnection'
  /** Edges for the RootQueryToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = {
  __typename?: 'RootQueryToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = {
  __typename?: 'RootQueryToThemeConnection'
  /** Edges for the RootQueryToThemeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Theme>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
  __typename?: 'RootQueryToThemeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Theme>
}

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = {
  __typename?: 'RootQueryToUserConnection'
  /** Edges for the RootQueryToUserConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
  __typename?: 'RootQueryToUserConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<User>
}

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of userIds to include. */
  include?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** The user login. */
  login?: InputMaybe<Scalars['String']['input']>
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The user nicename. */
  nicename?: InputMaybe<Scalars['String']['input']>
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: InputMaybe<UserRoleEnum>
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>
}

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = {
  __typename?: 'RootQueryToUserRoleConnection'
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<UserRole>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
  __typename?: 'RootQueryToUserRoleConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<UserRole>
}

/** The Yoast SEO breadcrumb config */
export type SeoBreadcrumbs = {
  __typename?: 'SEOBreadcrumbs'
  archivePrefix?: Maybe<Scalars['String']['output']>
  boldLast?: Maybe<Scalars['Boolean']['output']>
  enabled?: Maybe<Scalars['Boolean']['output']>
  homeText?: Maybe<Scalars['String']['output']>
  notFoundText?: Maybe<Scalars['String']['output']>
  prefix?: Maybe<Scalars['String']['output']>
  searchPrefix?: Maybe<Scalars['String']['output']>
  separator?: Maybe<Scalars['String']['output']>
  showBlogPage?: Maybe<Scalars['Boolean']['output']>
}

/** Types of cards */
export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image',
}

/** The Yoast SEO site level configuration data */
export type SeoConfig = {
  __typename?: 'SEOConfig'
  breadcrumbs?: Maybe<SeoBreadcrumbs>
  contentTypes?: Maybe<SeoContentTypes>
  openGraph?: Maybe<SeoOpenGraph>
  redirects?: Maybe<Array<Maybe<SeoRedirect>>>
  schema?: Maybe<SeoSchema>
  social?: Maybe<SeoSocial>
  webmaster?: Maybe<SeoWebmaster>
}

/** he Yoast SEO search appearance content types fields */
export type SeoContentType = {
  __typename?: 'SEOContentType'
  archive?: Maybe<SeoContentTypeArchive>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['Boolean']['output']>
  schema?: Maybe<SeoPageInfoSchema>
  schemaType?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** he Yoast SEO search appearance content types fields */
export type SeoContentTypeArchive = {
  __typename?: 'SEOContentTypeArchive'
  archiveLink?: Maybe<Scalars['String']['output']>
  breadcrumbTitle?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  hasArchive?: Maybe<Scalars['Boolean']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['Boolean']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO search appearance content types */
export type SeoContentTypes = {
  __typename?: 'SEOContentTypes'
  aboutItem?: Maybe<SeoContentType>
  contactItem?: Maybe<SeoContentType>
  feedbackItem?: Maybe<SeoContentType>
  footerItem?: Maybe<SeoContentType>
  fragment?: Maybe<SeoContentType>
  heroItem?: Maybe<SeoContentType>
  mediaItem?: Maybe<SeoContentType>
  messenger?: Maybe<SeoContentType>
  navigationItem?: Maybe<SeoContentType>
  page?: Maybe<SeoContentType>
  post?: Maybe<SeoContentType>
  privacyPolicyItem?: Maybe<SeoContentType>
  recruit?: Maybe<SeoContentType>
  review?: Maybe<SeoContentType>
  skill?: Maybe<SeoContentType>
  socialNetwork?: Maybe<SeoContentType>
}

/** The Open Graph data */
export type SeoOpenGraph = {
  __typename?: 'SEOOpenGraph'
  defaultImage?: Maybe<MediaItem>
  frontPage?: Maybe<SeoOpenGraphFrontPage>
}

/** The Open Graph Front page data */
export type SeoOpenGraphFrontPage = {
  __typename?: 'SEOOpenGraphFrontPage'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  title?: Maybe<Scalars['String']['output']>
}

/** The Schema for post type */
export type SeoPageInfoSchema = {
  __typename?: 'SEOPageInfoSchema'
  raw?: Maybe<Scalars['String']['output']>
}

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs'
  text?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** The page info SEO details */
export type SeoPostTypePageInfo = {
  __typename?: 'SEOPostTypePageInfo'
  schema?: Maybe<SeoPageInfoSchema>
}

/** The Schema types */
export type SeoPostTypeSchema = {
  __typename?: 'SEOPostTypeSchema'
  articleType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  pageType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  raw?: Maybe<Scalars['String']['output']>
}

/** The Yoast redirect data  (Yoast Premium only) */
export type SeoRedirect = {
  __typename?: 'SEORedirect'
  format?: Maybe<Scalars['String']['output']>
  origin?: Maybe<Scalars['String']['output']>
  target?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['Int']['output']>
}

/** The Yoast SEO schema data */
export type SeoSchema = {
  __typename?: 'SEOSchema'
  companyLogo?: Maybe<MediaItem>
  companyName?: Maybe<Scalars['String']['output']>
  companyOrPerson?: Maybe<Scalars['String']['output']>
  inLanguage?: Maybe<Scalars['String']['output']>
  logo?: Maybe<MediaItem>
  personLogo?: Maybe<MediaItem>
  personName?: Maybe<Scalars['String']['output']>
  siteName?: Maybe<Scalars['String']['output']>
  siteUrl?: Maybe<Scalars['String']['output']>
  wordpressSiteName?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO Social media links */
export type SeoSocial = {
  __typename?: 'SEOSocial'
  facebook?: Maybe<SeoSocialFacebook>
  instagram?: Maybe<SeoSocialInstagram>
  linkedIn?: Maybe<SeoSocialLinkedIn>
  mySpace?: Maybe<SeoSocialMySpace>
  pinterest?: Maybe<SeoSocialPinterest>
  twitter?: Maybe<SeoSocialTwitter>
  wikipedia?: Maybe<SeoSocialWikipedia>
  youTube?: Maybe<SeoSocialYoutube>
}

export type SeoSocialFacebook = {
  __typename?: 'SEOSocialFacebook'
  defaultImage?: Maybe<MediaItem>
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialInstagram = {
  __typename?: 'SEOSocialInstagram'
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialLinkedIn = {
  __typename?: 'SEOSocialLinkedIn'
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialMySpace = {
  __typename?: 'SEOSocialMySpace'
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialPinterest = {
  __typename?: 'SEOSocialPinterest'
  metaTag?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialTwitter = {
  __typename?: 'SEOSocialTwitter'
  cardType?: Maybe<SeoCardType>
  username?: Maybe<Scalars['String']['output']>
}

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia'
  url?: Maybe<Scalars['String']['output']>
}

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube'
  url?: Maybe<Scalars['String']['output']>
}

/** The Schema types for Taxonomy */
export type SeoTaxonomySchema = {
  __typename?: 'SEOTaxonomySchema'
  raw?: Maybe<Scalars['String']['output']>
}

export type SeoUser = {
  __typename?: 'SEOUser'
  fullHead?: Maybe<Scalars['String']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['String']['output']>
  schema?: Maybe<SeoUserSchema>
  social?: Maybe<SeoUserSocial>
  title?: Maybe<Scalars['String']['output']>
}

/** The Schema types for User */
export type SeoUserSchema = {
  __typename?: 'SEOUserSchema'
  raw?: Maybe<Scalars['String']['output']>
}

export type SeoUserSocial = {
  __typename?: 'SEOUserSocial'
  facebook?: Maybe<Scalars['String']['output']>
  instagram?: Maybe<Scalars['String']['output']>
  linkedIn?: Maybe<Scalars['String']['output']>
  mySpace?: Maybe<Scalars['String']['output']>
  pinterest?: Maybe<Scalars['String']['output']>
  soundCloud?: Maybe<Scalars['String']['output']>
  twitter?: Maybe<Scalars['String']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
  youTube?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO  webmaster fields */
export type SeoWebmaster = {
  __typename?: 'SEOWebmaster'
  baiduVerify?: Maybe<Scalars['String']['output']>
  googleVerify?: Maybe<Scalars['String']['output']>
  msVerify?: Maybe<Scalars['String']['output']>
  yandexVerify?: Maybe<Scalars['String']['output']>
}

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the user's username or email address. */
  username: Scalars['String']['input']
}

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The user that the password reset email was sent to */
  user?: Maybe<User>
}

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings'
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']['output']>
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']['output']>
  /** Settings of the the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']['output']>
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']['output']>
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']['output']>
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']['output']>
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']['output']>
}

/** Shipping */
export type ShippingField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ShippingField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ShippingFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<ShippingFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ShippingFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** Cost */
    shippingCost?: Maybe<Scalars['String']['output']>
    /** shipping_options */
    shippingOptions?: Maybe<Array<Maybe<FieldOption>>>
    /** Cost Type */
    shippingType?: Maybe<Scalars['String']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ShippingFieldClasses = {
  __typename?: 'ShippingFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ShippingFieldDescription = {
  __typename?: 'ShippingFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ShippingFieldHelp = {
  __typename?: 'ShippingFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** The Skill type */
export type Skill = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithPageAttributes &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'Skill'
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the skill object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Polylang language */
    language?: Maybe<Language>
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<Scalars['Int']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** The parent of the node. The parent object can be of various types */
    parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Skill type and the postFormat type */
    postFormats?: Maybe<SkillToPostFormatConnection>
    /** Connection between the Skill type and the Skill type */
    preview?: Maybe<SkillToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the Skill */
    seo?: Maybe<PostTypeSeo>
    /** Connection between the Skill type and the SkillCategory type */
    skillCategories?: Maybe<SkillToSkillCategoryConnection>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    skillId: Scalars['Int']['output']
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** Connection between the Skill type and the TermNode type */
    terms?: Maybe<SkillToTermNodeConnection>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<Skill>
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Skill>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The Skill type */
export type SkillAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>
}

/** The Skill type */
export type SkillChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>
}

/** The Skill type */
export type SkillContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Skill type */
export type SkillEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Skill type */
export type SkillEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Skill type */
export type SkillPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SkillToPostFormatConnectionWhereArgs>
}

/** The Skill type */
export type SkillSkillCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SkillToSkillCategoryConnectionWhereArgs>
}

/** The Skill type */
export type SkillTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SkillToTermNodeConnectionWhereArgs>
}

/** The Skill type */
export type SkillTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Skill type */
export type SkillTranslationArgs = {
  language: LanguageCodeEnum
}

/** The SkillCategory type */
export type SkillCategory = DatabaseIdentifier &
  HierarchicalTermNode &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'SkillCategory'
    /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<SkillCategoryToAncestorsSkillCategoryConnection>
    /** Connection between the SkillCategory type and the SkillCategory type */
    children?: Maybe<SkillCategoryToSkillCategoryConnection>
    /** Connection between the SkillCategory type and the ContentNode type */
    contentNodes?: Maybe<SkillCategoryToContentNodeConnection>
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** The description of the object */
    description?: Maybe<Scalars['String']['output']>
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
    /** The unique resource identifier path */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** List available translations for this post */
    language?: Maybe<Language>
    /** The link to the term */
    link?: Maybe<Scalars['String']['output']>
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']['output']>
    /** Connection between the SkillCategory type and the SkillCategory type */
    parent?: Maybe<SkillCategoryToParentSkillCategoryConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the Списки скиллов taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для скиллов&quot; was set to Show in GraphQL. */
    skillAddons?: Maybe<SkillCategory_Skilladdons>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    skillCategoryId?: Maybe<Scalars['Int']['output']>
    /** Connection between the SkillCategory type and the Skill type */
    skills?: Maybe<SkillCategoryToSkillConnection>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the SkillCategory type and the Taxonomy type */
    taxonomy?: Maybe<SkillCategoryToTaxonomyConnectionEdge>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<SkillCategory>
    /** List all translated versions of this term */
    translations?: Maybe<Array<Maybe<SkillCategory>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The SkillCategory type */
export type SkillCategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The SkillCategory type */
export type SkillCategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SkillCategoryToSkillCategoryConnectionWhereArgs>
}

/** The SkillCategory type */
export type SkillCategoryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SkillCategoryToContentNodeConnectionWhereArgs>
}

/** The SkillCategory type */
export type SkillCategoryEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The SkillCategory type */
export type SkillCategoryEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The SkillCategory type */
export type SkillCategorySkillsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SkillCategoryToSkillConnectionWhereArgs>
}

/** The SkillCategory type */
export type SkillCategoryTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum SkillCategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the SkillCategory type and the SkillCategory type */
export type SkillCategoryToAncestorsSkillCategoryConnection = {
  __typename?: 'SkillCategoryToAncestorsSkillCategoryConnection'
  /** Edges for the SkillCategoryToAncestorsSkillCategoryConnection connection */
  edges?: Maybe<Array<Maybe<SkillCategoryToAncestorsSkillCategoryConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<SkillCategory>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type SkillCategoryToAncestorsSkillCategoryConnectionEdge = {
  __typename?: 'SkillCategoryToAncestorsSkillCategoryConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<SkillCategory>
}

/** Connection between the SkillCategory type and the ContentNode type */
export type SkillCategoryToContentNodeConnection = {
  __typename?: 'SkillCategoryToContentNodeConnection'
  /** Edges for the SkillCategoryToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<SkillCategoryToContentNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type SkillCategoryToContentNodeConnectionEdge = {
  __typename?: 'SkillCategoryToContentNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>
}

/** Arguments for filtering the SkillCategoryToContentNodeConnection connection */
export type SkillCategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfSkillCategoryEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the SkillCategory type and the SkillCategory type */
export type SkillCategoryToParentSkillCategoryConnectionEdge = {
  __typename?: 'SkillCategoryToParentSkillCategoryConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<SkillCategory>
}

/** Connection between the SkillCategory type and the SkillCategory type */
export type SkillCategoryToSkillCategoryConnection = {
  __typename?: 'SkillCategoryToSkillCategoryConnection'
  /** Edges for the SkillCategoryToSkillCategoryConnection connection */
  edges?: Maybe<Array<Maybe<SkillCategoryToSkillCategoryConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<SkillCategory>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type SkillCategoryToSkillCategoryConnectionEdge = {
  __typename?: 'SkillCategoryToSkillCategoryConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<SkillCategory>
}

/** Arguments for filtering the SkillCategoryToSkillCategoryConnection connection */
export type SkillCategoryToSkillCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the SkillCategory type and the Skill type */
export type SkillCategoryToSkillConnection = {
  __typename?: 'SkillCategoryToSkillConnection'
  /** Edges for the SkillCategoryToSkillConnection connection */
  edges?: Maybe<Array<Maybe<SkillCategoryToSkillConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Skill>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type SkillCategoryToSkillConnectionEdge = {
  __typename?: 'SkillCategoryToSkillConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Skill>
}

/** Arguments for filtering the SkillCategoryToSkillConnection connection */
export type SkillCategoryToSkillConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the SkillCategory type and the Taxonomy type */
export type SkillCategoryToTaxonomyConnectionEdge = {
  __typename?: 'SkillCategoryToTaxonomyConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Taxonomy>
}

/** Field Group */
export type SkillCategory_Skilladdons = AcfFieldGroup & {
  __typename?: 'SkillCategory_Skilladdons'
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  icon?: Maybe<MediaItem>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum SkillIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Set relationships between the Skill to postFormats */
export type SkillPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<SkillPostFormatsNodeInput>>>
}

/** List of postFormats to connect the Skill to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type SkillPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat. If present, this will be used to connect to the Skill. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Set relationships between the Skill to SkillCategories */
export type SkillSkillCategoriesInput = {
  /** If true, this will append the SkillCategory to existing related SkillCategories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<SkillSkillCategoriesNodeInput>>>
}

/** List of SkillCategories to connect the Skill to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type SkillSkillCategoriesNodeInput = {
  /** The description of the SkillCategory. This field is used to set a description of the SkillCategory if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the SkillCategory. If present, this will be used to connect to the Skill. If no existing SkillCategory exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the SkillCategory. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the SkillCategory. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Skill type and the postFormat type */
export type SkillToPostFormatConnection = {
  __typename?: 'SkillToPostFormatConnection'
  /** Edges for the SkillToPostFormatConnection connection */
  edges?: Maybe<Array<Maybe<SkillToPostFormatConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<PostFormat>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type SkillToPostFormatConnectionEdge = {
  __typename?: 'SkillToPostFormatConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The Yoast SEO Primary post_format */
  isPrimary?: Maybe<Scalars['Boolean']['output']>
  /** The item at the end of the edge */
  node?: Maybe<PostFormat>
}

/** Arguments for filtering the SkillToPostFormatConnection connection */
export type SkillToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Skill type and the Skill type */
export type SkillToPreviewConnectionEdge = {
  __typename?: 'SkillToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Skill>
}

/** Connection between the Skill type and the SkillCategory type */
export type SkillToSkillCategoryConnection = {
  __typename?: 'SkillToSkillCategoryConnection'
  /** Edges for the SkillToSkillCategoryConnection connection */
  edges?: Maybe<Array<Maybe<SkillToSkillCategoryConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<SkillCategory>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type SkillToSkillCategoryConnectionEdge = {
  __typename?: 'SkillToSkillCategoryConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The Yoast SEO Primary skill_list */
  isPrimary?: Maybe<Scalars['Boolean']['output']>
  /** The item at the end of the edge */
  node?: Maybe<SkillCategory>
}

/** Arguments for filtering the SkillToSkillCategoryConnection connection */
export type SkillToSkillCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Skill type and the TermNode type */
export type SkillToTermNodeConnection = {
  __typename?: 'SkillToTermNodeConnection'
  /** Edges for the SkillToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<SkillToTermNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type SkillToTermNodeConnectionEdge = {
  __typename?: 'SkillToTermNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<TermNode>
}

/** Arguments for filtering the SkillToTermNodeConnection connection */
export type SkillToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** The SocialNetwork type */
export type SocialNetwork = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'SocialNetwork'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Added to the GraphQL Schema because the ACF Field Group &quot;Аддоны для контента&quot; was set to Show in GraphQL. */
    contentAddons?: Maybe<SocialNetwork_Contentaddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** Post publishing date. */
    date?: Maybe<Scalars['String']['output']>
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']['output']>
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']['output']>
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']['output']>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the social_networks object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']['output']>
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>
    /** The permalink of the post */
    link?: Maybe<Scalars['String']['output']>
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** Connection between the SocialNetwork type and the SocialNetwork type */
    preview?: Maybe<SocialNetworkToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the SocialNetwork */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    socialNetworkId: Scalars['Int']['output']
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The SocialNetwork type */
export type SocialNetworkContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The SocialNetwork type */
export type SocialNetworkEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The SocialNetwork type */
export type SocialNetworkEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The SocialNetwork type */
export type SocialNetworkTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum SocialNetworkIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the SocialNetwork type and the SocialNetwork type */
export type SocialNetworkToPreviewConnectionEdge = {
  __typename?: 'SocialNetworkToPreviewConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<SocialNetwork>
}

/** Field Group */
export type SocialNetwork_Contentaddons = AcfFieldGroup & {
  __typename?: 'SocialNetwork_Contentaddons'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  image?: Maybe<MediaItem>
  order?: Maybe<Scalars['Float']['output']>
  role?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Anti-Spam */
export type SpamField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'SpamField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<SpamFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<SpamFieldDescription>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<SpamFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<SpamFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Question */
    label?: Maybe<Scalars['String']['output']>
    /** Question Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** Answer */
    spamAnswer?: Maybe<Scalars['String']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type SpamFieldClasses = {
  __typename?: 'SpamFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type SpamFieldDescription = {
  __typename?: 'SpamFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type SpamFieldHelp = {
  __typename?: 'SpamFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type SpamFieldInputLimitSet = {
  __typename?: 'SpamFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** Star Rating */
export type StarratingField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'StarratingField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<StarratingFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** Number of stars */
    numberOfStars?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type StarratingFieldClasses = {
  __typename?: 'StarratingFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Submit */
export type SubmitField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'SubmitField'
    /** Custom Class Names */
    classes?: Maybe<SubmitFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Processing Label */
    processingLabel?: Maybe<Scalars['String']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type SubmitFieldClasses = {
  __typename?: 'SubmitFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Input for the submitForm mutation */
export type SubmitFormInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Submited form data */
  data?: InputMaybe<Array<InputMaybe<InputField>>>
  /** Submited form Id */
  formId?: InputMaybe<Scalars['Int']['input']>
}

/** The payload for the submitForm mutation */
export type SubmitFormPayload = {
  __typename?: 'SubmitFormPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Field errors */
  errors?: Maybe<Array<Maybe<FieldError>>>
  /** Generic operation message */
  message?: Maybe<Scalars['String']['output']>
  /** Form submitted successfuly */
  success?: Maybe<Scalars['Boolean']['output']>
}

/** The tag type */
export type Tag = DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'Tag'
    /** Connection between the tag type and the ContentNode type */
    contentNodes?: Maybe<TagToContentNodeConnection>
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']['output']>
    /** The unique resource identifier path */
    databaseId: Scalars['Int']['output']
    /** The description of the object */
    description?: Maybe<Scalars['String']['output']>
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
    /** The unique resource identifier path */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** List available translations for this post */
    language?: Maybe<Language>
    /** The link to the term */
    link?: Maybe<Scalars['String']['output']>
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']['output']>
    /** Connection between the tag type and the post type */
    posts?: Maybe<TagToPostConnection>
    /** The Yoast SEO data of the Метки taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    tagId?: Maybe<Scalars['Int']['output']>
    /** Connection between the tag type and the Taxonomy type */
    taxonomy?: Maybe<TagToTaxonomyConnectionEdge>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<Tag>
    /** List all translated versions of this term */
    translations?: Maybe<Array<Maybe<Tag>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The tag type */
export type TagContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TagToContentNodeConnectionWhereArgs>
}

/** The tag type */
export type TagEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The tag type */
export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TagToPostConnectionWhereArgs>
}

/** The tag type */
export type TagTranslationArgs = {
  language: LanguageCodeEnum
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the tag type and the ContentNode type */
export type TagToContentNodeConnection = {
  __typename?: 'TagToContentNodeConnection'
  /** Edges for the TagToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<TagToContentNodeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = {
  __typename?: 'TagToContentNodeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>
}

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the tag type and the post type */
export type TagToPostConnection = {
  __typename?: 'TagToPostConnection'
  /** Edges for the TagToPostConnection connection */
  edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type TagToPostConnectionEdge = {
  __typename?: 'TagToPostConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Post>
}

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = {
  __typename?: 'TagToTaxonomyConnectionEdge'
  /** The node of the connection, without the edges */
  node?: Maybe<Taxonomy>
}

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy'
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']['output']>
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']['output']>
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']['output']>
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']['output']>
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']['output']>
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']['output']>
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']['output']>
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']['output']>
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']['output']>
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']['output']>
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']['output']>
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']['output']>
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']['output']>
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']['output']>
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']['output']>
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']['output']>
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']['output']>
}

/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum skill_list */
  Skillcategory = 'SKILLCATEGORY',
  /** Taxonomy enum post_tag */
  Tag = 'TAG',
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME',
}

export type TaxonomySeo = {
  __typename?: 'TaxonomySEO'
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>
  canonical?: Maybe<Scalars['String']['output']>
  cornerstone?: Maybe<Scalars['Boolean']['output']>
  focuskw?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaKeywords?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['String']['output']>
  opengraphAuthor?: Maybe<Scalars['String']['output']>
  opengraphDescription?: Maybe<Scalars['String']['output']>
  opengraphImage?: Maybe<MediaItem>
  opengraphModifiedTime?: Maybe<Scalars['String']['output']>
  opengraphPublishedTime?: Maybe<Scalars['String']['output']>
  opengraphPublisher?: Maybe<Scalars['String']['output']>
  opengraphSiteName?: Maybe<Scalars['String']['output']>
  opengraphTitle?: Maybe<Scalars['String']['output']>
  opengraphType?: Maybe<Scalars['String']['output']>
  opengraphUrl?: Maybe<Scalars['String']['output']>
  schema?: Maybe<SeoTaxonomySchema>
  title?: Maybe<Scalars['String']['output']>
  twitterDescription?: Maybe<Scalars['String']['output']>
  twitterImage?: Maybe<MediaItem>
  twitterTitle?: Maybe<Scalars['String']['output']>
}

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = {
  __typename?: 'TaxonomyToContentTypeConnection'
  /** Edges for the TaxonomyToContentTypeConnection connection */
  edges?: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentType>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = {
  __typename?: 'TaxonomyToContentTypeConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentType>
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']['output']>
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output']
  /** The description of the object */
  description?: Maybe<Scalars['String']['output']>
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>
  /** The unique resource identifier path */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = {
  __typename?: 'TermNodeToEnqueuedScriptConnection'
  /** Edges for the TermNodeToEnqueuedScriptConnection connection */
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedScript>
}

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection'
  /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedStylesheet>
}

/** Union between the Category, Tag and PostFormatPost types */
export type TermObjectUnion = Category | PostFormat | SkillCategory | Tag

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER',
}

/** Terms List */
export type TermsField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'TermsField'
    /** Add New Terms */
    addNewTerms?: Maybe<Scalars['Boolean']['output']>
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<TermsFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<TermsFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<TermsFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** options */
    options?: Maybe<Array<Maybe<FieldOption>>>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** Taxonomy */
    taxonomy?: Maybe<Scalars['String']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type TermsFieldClasses = {
  __typename?: 'TermsFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type TermsFieldDescription = {
  __typename?: 'TermsFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type TermsFieldHelp = {
  __typename?: 'TermsFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Paragraph Text */
export type TextareaField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'TextareaField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<TextareaFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<TextareaFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** Disable Rich Text Editor on Mobile */
    disableRteMobile?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<TextareaFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<TextareaFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** Show Media Upload Button */
    textareaMedia?: Maybe<Scalars['Boolean']['output']>
    /** Show Rich Text Editor */
    textareaRte?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type TextareaFieldClasses = {
  __typename?: 'TextareaFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type TextareaFieldDescription = {
  __typename?: 'TextareaFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type TextareaFieldHelp = {
  __typename?: 'TextareaFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type TextareaFieldInputLimitSet = {
  __typename?: 'TextareaFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** Single Line Text */
export type TextboxField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'TextboxField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<TextboxFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Mask */
    customMask?: Maybe<Scalars['String']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<TextboxFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<TextboxFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<TextboxFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Input Mask */
    mask?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type TextboxFieldClasses = {
  __typename?: 'TextboxFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type TextboxFieldDescription = {
  __typename?: 'TextboxFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type TextboxFieldHelp = {
  __typename?: 'TextboxFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type TextboxFieldInputLimitSet = {
  __typename?: 'TextboxFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme'
  /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
  author?: Maybe<Scalars['String']['output']>
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<Scalars['String']['output']>
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<Scalars['String']['output']>
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
  screenshot?: Maybe<Scalars['String']['output']>
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
  slug?: Maybe<Scalars['String']['output']>
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
  themeUri?: Maybe<Scalars['String']['output']>
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<Scalars['String']['output']>
}

/** Available timezones */
export enum TimezoneEnum {
  /** Абиджан */
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  /** Аккра */
  AfricaAccra = 'AFRICA_ACCRA',
  /** Аддис-Абеба */
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  /** Алжир */
  AfricaAlgiers = 'AFRICA_ALGIERS',
  /** Асмэра */
  AfricaAsmara = 'AFRICA_ASMARA',
  /** Бамако */
  AfricaBamako = 'AFRICA_BAMAKO',
  /** Банги */
  AfricaBangui = 'AFRICA_BANGUI',
  /** Банжул */
  AfricaBanjul = 'AFRICA_BANJUL',
  /** Бисау */
  AfricaBissau = 'AFRICA_BISSAU',
  /** Блантайр */
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  /** Браззавиль */
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  /** Бужумбура */
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  /** Каир */
  AfricaCairo = 'AFRICA_CAIRO',
  /** Касабланка */
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  /** Сеута */
  AfricaCeuta = 'AFRICA_CEUTA',
  /** Конакри */
  AfricaConakry = 'AFRICA_CONAKRY',
  /** Дакар */
  AfricaDakar = 'AFRICA_DAKAR',
  /** Дар-эс-Салам */
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  /** Джибути */
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  /** Дуала */
  AfricaDouala = 'AFRICA_DOUALA',
  /** Эль-Аюн */
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  /** Фритаун */
  AfricaFreetown = 'AFRICA_FREETOWN',
  /** Габороне */
  AfricaGaborone = 'AFRICA_GABORONE',
  /** Хараре */
  AfricaHarare = 'AFRICA_HARARE',
  /** Йоханнесбург */
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  /** Джуба */
  AfricaJuba = 'AFRICA_JUBA',
  /** Кампала */
  AfricaKampala = 'AFRICA_KAMPALA',
  /** Хартум */
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  /** Кигали */
  AfricaKigali = 'AFRICA_KIGALI',
  /** Киншаса */
  AfricaKinshasa = 'AFRICA_KINSHASA',
  /** Лагос */
  AfricaLagos = 'AFRICA_LAGOS',
  /** Либревиль */
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  /** Ломе */
  AfricaLome = 'AFRICA_LOME',
  /** Луанда */
  AfricaLuanda = 'AFRICA_LUANDA',
  /** Лубумбаши */
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  /** Лусака */
  AfricaLusaka = 'AFRICA_LUSAKA',
  /** Малабо */
  AfricaMalabo = 'AFRICA_MALABO',
  /** Мапуту */
  AfricaMaputo = 'AFRICA_MAPUTO',
  /** Масеру */
  AfricaMaseru = 'AFRICA_MASERU',
  /** Мбабане */
  AfricaMbabane = 'AFRICA_MBABANE',
  /** Могадишо */
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  /** Монровия */
  AfricaMonrovia = 'AFRICA_MONROVIA',
  /** Найроби */
  AfricaNairobi = 'AFRICA_NAIROBI',
  /** Нджамена */
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  /** Ниамей */
  AfricaNiamey = 'AFRICA_NIAMEY',
  /** Нуакшот */
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  /** Уагадугу */
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  /** Порто-Ново */
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  /** Сан-Томе */
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  /** Триполи */
  AfricaTripoli = 'AFRICA_TRIPOLI',
  /** Тунис */
  AfricaTunis = 'AFRICA_TUNIS',
  /** Виндхук */
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  /** Адак */
  AmericaAdak = 'AMERICA_ADAK',
  /** Анкоридж */
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  /** Ангилья */
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  /** Антигуа */
  AmericaAntigua = 'AMERICA_ANTIGUA',
  /** Арагуаина */
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  /** Аргентина - Буэнос-Айрес */
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  /** Аргентина - Катамарка */
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  /** Аргентина - Кордова */
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  /** Аргентина - Жужуй */
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  /** Аргентина - Ла-Риоха */
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  /** Аргентина - Мендоса */
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  /** Аргентина - Рио-Гальегос */
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  /** Аргентина - Сальта */
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  /** Аргентина - Сан-Хуан */
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  /** Аргентина - Сан-Луис */
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  /** Аргентина - Тукуман */
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  /** Аргентина - Ушуайя */
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  /** Аруба */
  AmericaAruba = 'AMERICA_ARUBA',
  /** Асунсьон */
  AmericaAsuncion = 'AMERICA_ASUNCION',
  /** Атикокан */
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  /** Баия */
  AmericaBahia = 'AMERICA_BAHIA',
  /** Баия-де-Бандерас */
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  /** Барбадос */
  AmericaBarbados = 'AMERICA_BARBADOS',
  /** Белем */
  AmericaBelem = 'AMERICA_BELEM',
  /** Белиз */
  AmericaBelize = 'AMERICA_BELIZE',
  /** Бланк-Саблон */
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  /** Боа-Виста */
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  /** Богота */
  AmericaBogota = 'AMERICA_BOGOTA',
  /** Бойсе */
  AmericaBoise = 'AMERICA_BOISE',
  /** Кеймбридж-Бей */
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  /** Кампу-Гранди */
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  /** Канкун */
  AmericaCancun = 'AMERICA_CANCUN',
  /** Каракас */
  AmericaCaracas = 'AMERICA_CARACAS',
  /** Кайенна */
  AmericaCayenne = 'AMERICA_CAYENNE',
  /** Кайман */
  AmericaCayman = 'AMERICA_CAYMAN',
  /** Чикаго */
  AmericaChicago = 'AMERICA_CHICAGO',
  /** Чиуауа */
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  /** Коста-Рика */
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  /** Крестон */
  AmericaCreston = 'AMERICA_CRESTON',
  /** Куяба */
  AmericaCuiaba = 'AMERICA_CUIABA',
  /** Кюрасао */
  AmericaCuracao = 'AMERICA_CURACAO',
  /** Данмарксхавн */
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  /** Доусон */
  AmericaDawson = 'AMERICA_DAWSON',
  /** Досон-Крик */
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  /** Денвер */
  AmericaDenver = 'AMERICA_DENVER',
  /** Детройт */
  AmericaDetroit = 'AMERICA_DETROIT',
  /** Доминика */
  AmericaDominica = 'AMERICA_DOMINICA',
  /** Эдмонтон */
  AmericaEdmonton = 'AMERICA_EDMONTON',
  /** Эйрунепе */
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  /** Сальвадор */
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  /** Форталеза */
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  /** Форт-Нельсон */
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  /** Глейс-Бей */
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  /** Гус-Бей */
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  /** Гранд-Терк */
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  /** Гренада */
  AmericaGrenada = 'AMERICA_GRENADA',
  /** Гваделупа */
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  /** Гватемала */
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  /** Гуаякиль */
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  /** Гайана */
  AmericaGuyana = 'AMERICA_GUYANA',
  /** Галифакс */
  AmericaHalifax = 'AMERICA_HALIFAX',
  /** Гавана */
  AmericaHavana = 'AMERICA_HAVANA',
  /** Эрмосильо */
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  /** Индиана - Индианаполис */
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  /** Индиана - Нокс */
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  /** Индиана - Маренго */
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  /** Индиана - Петербург */
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  /** Индиана - Телл-Сити */
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  /** Индиана - Вевей */
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  /** Индиана - Венсен */
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  /** Индиана - Винамак */
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  /** Инувик */
  AmericaInuvik = 'AMERICA_INUVIK',
  /** Икалуит */
  AmericaIqaluit = 'AMERICA_IQALUIT',
  /** Ямайка */
  AmericaJamaica = 'AMERICA_JAMAICA',
  /** Джуно */
  AmericaJuneau = 'AMERICA_JUNEAU',
  /** Кентукки - Луисвилл */
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  /** Кентукки - Монтичелло */
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  /** Кралендейк */
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  /** Ла-Пас */
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  /** Лима */
  AmericaLima = 'AMERICA_LIMA',
  /** Лос-Анджелес */
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  /** Лоуэр-Принсес */
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  /** Масейо */
  AmericaMaceio = 'AMERICA_MACEIO',
  /** Манагуа */
  AmericaManagua = 'AMERICA_MANAGUA',
  /** Манаус */
  AmericaManaus = 'AMERICA_MANAUS',
  /** Мариго */
  AmericaMarigot = 'AMERICA_MARIGOT',
  /** Мартиника */
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  /** Матаморос */
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  /** Масатлан */
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  /** Меномини */
  AmericaMenominee = 'AMERICA_MENOMINEE',
  /** Мерида */
  AmericaMerida = 'AMERICA_MERIDA',
  /** Метлакатла */
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  /** Мехико */
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  /** Микелон */
  AmericaMiquelon = 'AMERICA_MIQUELON',
  /** Монктон */
  AmericaMoncton = 'AMERICA_MONCTON',
  /** Монтеррей */
  AmericaMonterrey = 'AMERICA_MONTERREY',
  /** Монтевидео */
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  /** Монсеррат */
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  /** Нассау */
  AmericaNassau = 'AMERICA_NASSAU',
  /** Нью-Йорк */
  AmericaNewYork = 'AMERICA_NEW_YORK',
  /** Нипигон */
  AmericaNipigon = 'AMERICA_NIPIGON',
  /** Ном */
  AmericaNome = 'AMERICA_NOME',
  /** Норонья */
  AmericaNoronha = 'AMERICA_NORONHA',
  /** Северная Дакота - Бьюла */
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  /** Северная Дакота - Центр */
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  /** Северная Дакота - Нью-Салем */
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  /** Нуук */
  AmericaNuuk = 'AMERICA_NUUK',
  /** Охинага */
  AmericaOjinaga = 'AMERICA_OJINAGA',
  /** Панама */
  AmericaPanama = 'AMERICA_PANAMA',
  /** Пангниртунг */
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  /** Парамарибо */
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  /** Феникс */
  AmericaPhoenix = 'AMERICA_PHOENIX',
  /** Порту-Велью */
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  /** Порт-о-Пренс */
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  /** Порт-оф-Спейн */
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  /** Пуэрто-Рико */
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  /** Пунта-Аренас */
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  /** Рейни-Ривер */
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  /** Ранкин-Инлет */
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  /** Ресифи */
  AmericaRecife = 'AMERICA_RECIFE',
  /** Реджайна */
  AmericaRegina = 'AMERICA_REGINA',
  /** Резольют */
  AmericaResolute = 'AMERICA_RESOLUTE',
  /** Рио-Бранко */
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  /** Сантарен */
  AmericaSantarem = 'AMERICA_SANTAREM',
  /** Сантьяго */
  AmericaSantiago = 'AMERICA_SANTIAGO',
  /** Санто-Доминго */
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  /** Сан-Паулу */
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  /** Скорсби */
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  /** Ситка */
  AmericaSitka = 'AMERICA_SITKA',
  /** Сент-Бартелеми */
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  /** Сент-Джонс */
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  /** Сент-Китс */
  AmericaStKitts = 'AMERICA_ST_KITTS',
  /** Сент-Люсия */
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  /** Сент-Томас */
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  /** Сент-Винсент */
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  /** Свифт-Каррент */
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  /** Тегусигальпа */
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  /** Туле */
  AmericaThule = 'AMERICA_THULE',
  /** Тандер-Бей */
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  /** Тихуана */
  AmericaTijuana = 'AMERICA_TIJUANA',
  /** Торонто */
  AmericaToronto = 'AMERICA_TORONTO',
  /** Тортола */
  AmericaTortola = 'AMERICA_TORTOLA',
  /** Ванкувер */
  AmericaVancouver = 'AMERICA_VANCOUVER',
  /** Уайтхорс */
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  /** Виннипег */
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  /** Якутат */
  AmericaYakutat = 'AMERICA_YAKUTAT',
  /** Йеллоунайф */
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  /** Кейси */
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  /** Дэвис */
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  /** Дюмон-Дюрвиль */
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  /** Маккуори */
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  /** Моусон */
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  /** Мак-Мердо */
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  /** Палмер */
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  /** Ротера */
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  /** Сиова */
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  /** Тролль */
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  /** Восток */
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  /** Лонгйир */
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  /** Аден */
  AsiaAden = 'ASIA_ADEN',
  /** Алматы */
  AsiaAlmaty = 'ASIA_ALMATY',
  /** Амман */
  AsiaAmman = 'ASIA_AMMAN',
  /** Анадырь */
  AsiaAnadyr = 'ASIA_ANADYR',
  /** Актау */
  AsiaAqtau = 'ASIA_AQTAU',
  /** Актобе */
  AsiaAqtobe = 'ASIA_AQTOBE',
  /** Ашхабад */
  AsiaAshgabat = 'ASIA_ASHGABAT',
  /** Атырау */
  AsiaAtyrau = 'ASIA_ATYRAU',
  /** Багдад */
  AsiaBaghdad = 'ASIA_BAGHDAD',
  /** Бахрейн */
  AsiaBahrain = 'ASIA_BAHRAIN',
  /** Баку */
  AsiaBaku = 'ASIA_BAKU',
  /** Бангкок */
  AsiaBangkok = 'ASIA_BANGKOK',
  /** Барнаул */
  AsiaBarnaul = 'ASIA_BARNAUL',
  /** Бейрут */
  AsiaBeirut = 'ASIA_BEIRUT',
  /** Бишкек */
  AsiaBishkek = 'ASIA_BISHKEK',
  /** Бруней */
  AsiaBrunei = 'ASIA_BRUNEI',
  /** Чита */
  AsiaChita = 'ASIA_CHITA',
  /** Чойбалсан */
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  /** Коломбо */
  AsiaColombo = 'ASIA_COLOMBO',
  /** Дамаск */
  AsiaDamascus = 'ASIA_DAMASCUS',
  /** Дакка */
  AsiaDhaka = 'ASIA_DHAKA',
  /** Дили */
  AsiaDili = 'ASIA_DILI',
  /** Дубай */
  AsiaDubai = 'ASIA_DUBAI',
  /** Душанбе */
  AsiaDushanbe = 'ASIA_DUSHANBE',
  /** Фамагуста */
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  /** Газа */
  AsiaGaza = 'ASIA_GAZA',
  /** Хеврон */
  AsiaHebron = 'ASIA_HEBRON',
  /** Гонконг */
  AsiaHongKong = 'ASIA_HONG_KONG',
  /** Ховд */
  AsiaHovd = 'ASIA_HOVD',
  /** Хошимин */
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  /** Иркутск */
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  /** Джакарта */
  AsiaJakarta = 'ASIA_JAKARTA',
  /** Джаяпура */
  AsiaJayapura = 'ASIA_JAYAPURA',
  /** Иерусалим */
  AsiaJerusalem = 'ASIA_JERUSALEM',
  /** Кабул */
  AsiaKabul = 'ASIA_KABUL',
  /** Камчатка */
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  /** Карачи */
  AsiaKarachi = 'ASIA_KARACHI',
  /** Катманду */
  AsiaKathmandu = 'ASIA_KATHMANDU',
  /** Хандыга */
  AsiaKhandyga = 'ASIA_KHANDYGA',
  /** Калькутта */
  AsiaKolkata = 'ASIA_KOLKATA',
  /** Красноярск */
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  /** Куала-Лумпур */
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  /** Кучинг */
  AsiaKuching = 'ASIA_KUCHING',
  /** Кувейт */
  AsiaKuwait = 'ASIA_KUWAIT',
  /** Макао */
  AsiaMacau = 'ASIA_MACAU',
  /** Магадан */
  AsiaMagadan = 'ASIA_MAGADAN',
  /** Макассар */
  AsiaMakassar = 'ASIA_MAKASSAR',
  /** Манила */
  AsiaManila = 'ASIA_MANILA',
  /** Маскат */
  AsiaMuscat = 'ASIA_MUSCAT',
  /** Никосия */
  AsiaNicosia = 'ASIA_NICOSIA',
  /** Новокузнецк */
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  /** Новосибирск */
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  /** Омск */
  AsiaOmsk = 'ASIA_OMSK',
  /** Орал */
  AsiaOral = 'ASIA_ORAL',
  /** Пномпень */
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  /** Понтианаке */
  AsiaPontianak = 'ASIA_PONTIANAK',
  /** Пхеньян */
  AsiaPyongyang = 'ASIA_PYONGYANG',
  /** Катар */
  AsiaQatar = 'ASIA_QATAR',
  /** Костанай */
  AsiaQostanay = 'ASIA_QOSTANAY',
  /** Кызылорда */
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  /** Эр-Рияд */
  AsiaRiyadh = 'ASIA_RIYADH',
  /** Сахалин */
  AsiaSakhalin = 'ASIA_SAKHALIN',
  /** Самарканд */
  AsiaSamarkand = 'ASIA_SAMARKAND',
  /** Сеул */
  AsiaSeoul = 'ASIA_SEOUL',
  /** Шанхай */
  AsiaShanghai = 'ASIA_SHANGHAI',
  /** Сингапур */
  AsiaSingapore = 'ASIA_SINGAPORE',
  /** Среднеколымск */
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  /** Тайбэй */
  AsiaTaipei = 'ASIA_TAIPEI',
  /** Ташкент */
  AsiaTashkent = 'ASIA_TASHKENT',
  /** Тбилиси */
  AsiaTbilisi = 'ASIA_TBILISI',
  /** Тегеран */
  AsiaTehran = 'ASIA_TEHRAN',
  /** Тхимпху */
  AsiaThimphu = 'ASIA_THIMPHU',
  /** Токио */
  AsiaTokyo = 'ASIA_TOKYO',
  /** Томск */
  AsiaTomsk = 'ASIA_TOMSK',
  /** Улан-Батор */
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  /** Урумчи */
  AsiaUrumqi = 'ASIA_URUMQI',
  /** Усть-Нера */
  AsiaUstNera = 'ASIA_UST_NERA',
  /** Вьентьян */
  AsiaVientiane = 'ASIA_VIENTIANE',
  /** Владивосток */
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  /** Якутск */
  AsiaYakutsk = 'ASIA_YAKUTSK',
  /** Янгон */
  AsiaYangon = 'ASIA_YANGON',
  /** Екатеринбург */
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  /** Ереван */
  AsiaYerevan = 'ASIA_YEREVAN',
  /** Азорские острова */
  AtlanticAzores = 'ATLANTIC_AZORES',
  /** Бермудские острова */
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  /** Канары */
  AtlanticCanary = 'ATLANTIC_CANARY',
  /** Кабо-Верде */
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  /** Фарер */
  AtlanticFaroe = 'ATLANTIC_FAROE',
  /** Мадейра */
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  /** Рейкьявик */
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  /** Южная Георгия */
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  /** Стэнли */
  AtlanticStanley = 'ATLANTIC_STANLEY',
  /** Остров св. Елены */
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  /** Аделаида */
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  /** Брисбен */
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  /** Броукен-Хил */
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  /** Дарвин */
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  /** Эукла */
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  /** Хобарт */
  AustraliaHobart = 'AUSTRALIA_HOBART',
  /** Линдеман */
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  /** Лорд-Хау */
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  /** Мельбурн */
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  /** Перт */
  AustraliaPerth = 'AUSTRALIA_PERTH',
  /** Сидней */
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  /** Амстердам */
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  /** Андорра */
  EuropeAndorra = 'EUROPE_ANDORRA',
  /** Астрахань */
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  /** Афины */
  EuropeAthens = 'EUROPE_ATHENS',
  /** Белград */
  EuropeBelgrade = 'EUROPE_BELGRADE',
  /** Берлин */
  EuropeBerlin = 'EUROPE_BERLIN',
  /** Братислава */
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  /** Брюссель */
  EuropeBrussels = 'EUROPE_BRUSSELS',
  /** Бухарест */
  EuropeBucharest = 'EUROPE_BUCHAREST',
  /** Будапешт */
  EuropeBudapest = 'EUROPE_BUDAPEST',
  /** Бюзинген */
  EuropeBusingen = 'EUROPE_BUSINGEN',
  /** Кишинёв */
  EuropeChisinau = 'EUROPE_CHISINAU',
  /** Копенгаген */
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  /** Дублин */
  EuropeDublin = 'EUROPE_DUBLIN',
  /** Гибралтар */
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  /** Гернси */
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  /** Хельсинки */
  EuropeHelsinki = 'EUROPE_HELSINKI',
  /** Остров Мэн */
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  /** Стамбул */
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  /** Джерси */
  EuropeJersey = 'EUROPE_JERSEY',
  /** Калининград */
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  /** Киев */
  EuropeKiev = 'EUROPE_KIEV',
  /** Киров */
  EuropeKirov = 'EUROPE_KIROV',
  /** Лиссабон */
  EuropeLisbon = 'EUROPE_LISBON',
  /** Любляна */
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  /** Лондон */
  EuropeLondon = 'EUROPE_LONDON',
  /** Люксембург */
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  /** Мадрид */
  EuropeMadrid = 'EUROPE_MADRID',
  /** Мальта */
  EuropeMalta = 'EUROPE_MALTA',
  /** Мариехамн */
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  /** Минск */
  EuropeMinsk = 'EUROPE_MINSK',
  /** Монако */
  EuropeMonaco = 'EUROPE_MONACO',
  /** Москва */
  EuropeMoscow = 'EUROPE_MOSCOW',
  /** Осло */
  EuropeOslo = 'EUROPE_OSLO',
  /** Париж */
  EuropeParis = 'EUROPE_PARIS',
  /** Подгорица */
  EuropePodgorica = 'EUROPE_PODGORICA',
  /** Прага */
  EuropePrague = 'EUROPE_PRAGUE',
  /** Рига */
  EuropeRiga = 'EUROPE_RIGA',
  /** Рим */
  EuropeRome = 'EUROPE_ROME',
  /** Самара */
  EuropeSamara = 'EUROPE_SAMARA',
  /** Сан-Марино */
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  /** Сараево */
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  /** Саратов */
  EuropeSaratov = 'EUROPE_SARATOV',
  /** Симферополь */
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  /** Скопье */
  EuropeSkopje = 'EUROPE_SKOPJE',
  /** София */
  EuropeSofia = 'EUROPE_SOFIA',
  /** Стокгольм */
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  /** Таллин */
  EuropeTallinn = 'EUROPE_TALLINN',
  /** Тирана */
  EuropeTirane = 'EUROPE_TIRANE',
  /** Ульяновск */
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  /** Ужгород */
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  /** Вадуц */
  EuropeVaduz = 'EUROPE_VADUZ',
  /** Ватикан */
  EuropeVatican = 'EUROPE_VATICAN',
  /** Вена */
  EuropeVienna = 'EUROPE_VIENNA',
  /** Вильнюс */
  EuropeVilnius = 'EUROPE_VILNIUS',
  /** Волгоград */
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  /** Варшава */
  EuropeWarsaw = 'EUROPE_WARSAW',
  /** Загреб */
  EuropeZagreb = 'EUROPE_ZAGREB',
  /** Запорожье */
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  /** Цюрих */
  EuropeZurich = 'EUROPE_ZURICH',
  /** Антананариву */
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  /** Чагос */
  IndianChagos = 'INDIAN_CHAGOS',
  /** Остров Рождества */
  IndianChristmas = 'INDIAN_CHRISTMAS',
  /** Кокосовые острова */
  IndianCocos = 'INDIAN_COCOS',
  /** Коморские острова */
  IndianComoro = 'INDIAN_COMORO',
  /** Кергелен */
  IndianKerguelen = 'INDIAN_KERGUELEN',
  /** Маэ */
  IndianMahe = 'INDIAN_MAHE',
  /** Мальдивы */
  IndianMaldives = 'INDIAN_MALDIVES',
  /** Маврикий */
  IndianMauritius = 'INDIAN_MAURITIUS',
  /** Майотта */
  IndianMayotte = 'INDIAN_MAYOTTE',
  /** Реюньон */
  IndianReunion = 'INDIAN_REUNION',
  /** Апия */
  PacificApia = 'PACIFIC_APIA',
  /** Окленд */
  PacificAuckland = 'PACIFIC_AUCKLAND',
  /** Бугенвиль */
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  /** Чатэм */
  PacificChatham = 'PACIFIC_CHATHAM',
  /** Трук */
  PacificChuuk = 'PACIFIC_CHUUK',
  /** Остров Пасхи */
  PacificEaster = 'PACIFIC_EASTER',
  /** Эфате */
  PacificEfate = 'PACIFIC_EFATE',
  /** Факаофо */
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  /** Фиджи */
  PacificFiji = 'PACIFIC_FIJI',
  /** Фунафути */
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  /** Галапагос */
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  /** Гамбье */
  PacificGambier = 'PACIFIC_GAMBIER',
  /** Гуадалканал */
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  /** Гуам */
  PacificGuam = 'PACIFIC_GUAM',
  /** Гонолулу */
  PacificHonolulu = 'PACIFIC_HONOLULU',
  /** Kanton */
  PacificKanton = 'PACIFIC_KANTON',
  /** Киритимати */
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  /** Кусаие */
  PacificKosrae = 'PACIFIC_KOSRAE',
  /** Кваджалейн */
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  /** Маджуро */
  PacificMajuro = 'PACIFIC_MAJURO',
  /** Маркизы */
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  /** Мидуэй */
  PacificMidway = 'PACIFIC_MIDWAY',
  /** Науру */
  PacificNauru = 'PACIFIC_NAURU',
  /** Ниуэ */
  PacificNiue = 'PACIFIC_NIUE',
  /** Норфолк */
  PacificNorfolk = 'PACIFIC_NORFOLK',
  /** Нумеа */
  PacificNoumea = 'PACIFIC_NOUMEA',
  /** Паго-Паго */
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  /** Палау */
  PacificPalau = 'PACIFIC_PALAU',
  /** Питкэрн */
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  /** Понпеи */
  PacificPohnpei = 'PACIFIC_POHNPEI',
  /** Порт-Морсби */
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  /** Раротонга */
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  /** Сайпан */
  PacificSaipan = 'PACIFIC_SAIPAN',
  /** Таити */
  PacificTahiti = 'PACIFIC_TAHITI',
  /** Тарава */
  PacificTarawa = 'PACIFIC_TARAWA',
  /** Тонгатапу */
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  /** Уэйк */
  PacificWake = 'PACIFIC_WAKE',
  /** Уоллис */
  PacificWallis = 'PACIFIC_WALLIS',
  /** UTC offset: UTC+0 */
  Utc_0 = 'UTC_0',
  /** UTC offset: UTC+0:30 */
  Utc_0_30 = 'UTC_0_30',
  /** UTC offset: UTC+1 */
  Utc_1 = 'UTC_1',
  /** UTC offset: UTC+1:30 */
  Utc_1_30 = 'UTC_1_30',
  /** UTC offset: UTC+2 */
  Utc_2 = 'UTC_2',
  /** UTC offset: UTC+2:30 */
  Utc_2_30 = 'UTC_2_30',
  /** UTC offset: UTC+3 */
  Utc_3 = 'UTC_3',
  /** UTC offset: UTC+3:30 */
  Utc_3_30 = 'UTC_3_30',
  /** UTC offset: UTC+4 */
  Utc_4 = 'UTC_4',
  /** UTC offset: UTC+4:30 */
  Utc_4_30 = 'UTC_4_30',
  /** UTC offset: UTC+5 */
  Utc_5 = 'UTC_5',
  /** UTC offset: UTC+5:30 */
  Utc_5_30 = 'UTC_5_30',
  /** UTC offset: UTC+5:45 */
  Utc_5_45 = 'UTC_5_45',
  /** UTC offset: UTC+6 */
  Utc_6 = 'UTC_6',
  /** UTC offset: UTC+6:30 */
  Utc_6_30 = 'UTC_6_30',
  /** UTC offset: UTC+7 */
  Utc_7 = 'UTC_7',
  /** UTC offset: UTC+7:30 */
  Utc_7_30 = 'UTC_7_30',
  /** UTC offset: UTC+8 */
  Utc_8 = 'UTC_8',
  /** UTC offset: UTC+8:30 */
  Utc_8_30 = 'UTC_8_30',
  /** UTC offset: UTC+8:45 */
  Utc_8_45 = 'UTC_8_45',
  /** UTC offset: UTC+9 */
  Utc_9 = 'UTC_9',
  /** UTC offset: UTC+9:30 */
  Utc_9_30 = 'UTC_9_30',
  /** UTC offset: UTC+10 */
  Utc_10 = 'UTC_10',
  /** UTC offset: UTC+10:30 */
  Utc_10_30 = 'UTC_10_30',
  /** UTC offset: UTC+11 */
  Utc_11 = 'UTC_11',
  /** UTC offset: UTC+11:30 */
  Utc_11_30 = 'UTC_11_30',
  /** UTC offset: UTC+12 */
  Utc_12 = 'UTC_12',
  /** UTC offset: UTC+12:45 */
  Utc_12_45 = 'UTC_12_45',
  /** UTC offset: UTC+13 */
  Utc_13 = 'UTC_13',
  /** UTC offset: UTC+13:45 */
  Utc_13_45 = 'UTC_13_45',
  /** UTC offset: UTC+14 */
  Utc_14 = 'UTC_14',
}

/** Total */
export type TotalField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'TotalField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<TotalFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Description */
    description?: Maybe<TotalFieldDescription>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<TotalFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type TotalFieldClasses = {
  __typename?: 'TotalFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type TotalFieldDescription = {
  __typename?: 'TotalFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type TotalFieldHelp = {
  __typename?: 'TotalFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Unknown */
export type UnknownField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'UnknownField'
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Key of the field */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    message?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** Indtifiable? */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** The field is required? */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Input for the updateAboutItem mutation */
export type UpdateAboutItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the AboutItem object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateAboutItem mutation */
export type UpdateAboutItemPayload = {
  __typename?: 'UpdateAboutItemPayload'
  /** The Post object mutation type. */
  aboutItem?: Maybe<AboutItem>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the UpdateCategory mutation */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category object to update */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the category object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload'
  /** The created category */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']['input']>
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']['input']>
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']['input']>
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the comment being updated. */
  id: Scalars['ID']['input']
  /** Parent comment of current comment. */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The comment that was created */
  comment?: Maybe<Comment>
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']['output']>
}

/** Input for the updateContactItem mutation */
export type UpdateContactItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the ContactItem object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateContactItem mutation */
export type UpdateContactItemPayload = {
  __typename?: 'UpdateContactItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  contactItem?: Maybe<ContactItem>
}

/** Input for the updateFeedbackItem mutation */
export type UpdateFeedbackItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the FeedbackItem object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateFeedbackItem mutation */
export type UpdateFeedbackItemPayload = {
  __typename?: 'UpdateFeedbackItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  feedbackItem?: Maybe<FeedbackItem>
}

/** Input for the updateFooterItem mutation */
export type UpdateFooterItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the FooterItem object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateFooterItem mutation */
export type UpdateFooterItemPayload = {
  __typename?: 'UpdateFooterItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  footerItem?: Maybe<FooterItem>
}

/** Input for the updateFragment mutation */
export type UpdateFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Fragment object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateFragment mutation */
export type UpdateFragmentPayload = {
  __typename?: 'UpdateFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  fragment?: Maybe<Fragment>
}

/** Input for the updateHeroItem mutation */
export type UpdateHeroItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the HeroItem object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateHeroItem mutation */
export type UpdateHeroItemPayload = {
  __typename?: 'UpdateHeroItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  heroItem?: Maybe<HeroItem>
}

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']['input']>
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']['input']>
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']['input']>
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']['input']>
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']['input']>
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>
  /** The ID of the mediaItem object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']['input']>
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the updateMessenger mutation */
export type UpdateMessengerInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Messenger object */
  id: Scalars['ID']['input']
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateMessenger mutation */
export type UpdateMessengerPayload = {
  __typename?: 'UpdateMessengerPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  messenger?: Maybe<Messenger>
}

/** Input for the updateNavigationItem mutation */
export type UpdateNavigationItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the NavigationItem object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateNavigationItem mutation */
export type UpdateNavigationItemPayload = {
  __typename?: 'UpdateNavigationItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the updatePage mutation */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the page object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  page?: Maybe<Page>
}

/** Input for the UpdatePostFormat mutation */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat object to update */
  id: Scalars['ID']['input']
  /** The name of the post_format object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the UpdatePostFormat mutation */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_format */
  postFormat?: Maybe<PostFormat>
}

/** Input for the updatePost mutation */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']['input']>
  /** The ID of the post object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']['input']>
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  post?: Maybe<Post>
}

/** Input for the updatePrivacyPolicyItem mutation */
export type UpdatePrivacyPolicyItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the PrivacyPolicyItem object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updatePrivacyPolicyItem mutation */
export type UpdatePrivacyPolicyItemPayload = {
  __typename?: 'UpdatePrivacyPolicyItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  privacyPolicyItem?: Maybe<PrivacyPolicyItem>
}

/** Input for the updateRecruit mutation */
export type UpdateRecruitInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Recruit object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateRecruit mutation */
export type UpdateRecruitPayload = {
  __typename?: 'UpdateRecruitPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  recruit?: Maybe<Recruit>
}

/** Input for the updateReview mutation */
export type UpdateReviewInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Review object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** Set connections between the Review and postFormats */
  postFormats?: InputMaybe<ReviewPostFormatsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateReview mutation */
export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  review?: Maybe<Review>
}

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Разрешить оставлять комментарии к новым записям. */
  discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars['String']['input']>
  /** Разрешить ссылки оповещения с других блогов (уведомления и обратные ссылки) на новые статьи. */
  discussionSettingsDefaultPingStatus?: InputMaybe<Scalars['String']['input']>
  /** Общий формат даты. */
  generalSettingsDateFormat?: InputMaybe<Scalars['String']['input']>
  /** Слоган сайта. */
  generalSettingsDescription?: InputMaybe<Scalars['String']['input']>
  /** Этот адрес используется в целях администрирования. Например, для уведомления о новых пользователях. */
  generalSettingsEmail?: InputMaybe<Scalars['String']['input']>
  /** Код локали WordPress. */
  generalSettingsLanguage?: InputMaybe<Scalars['String']['input']>
  /** Первый день недели. */
  generalSettingsStartOfWeek?: InputMaybe<Scalars['Int']['input']>
  /** Общий формат времени. */
  generalSettingsTimeFormat?: InputMaybe<Scalars['String']['input']>
  /** Город в той же временной зоне что и у вас. */
  generalSettingsTimezone?: InputMaybe<Scalars['String']['input']>
  /** Название сайта. */
  generalSettingsTitle?: InputMaybe<Scalars['String']['input']>
  /** Адрес сайта (URL) */
  generalSettingsUrl?: InputMaybe<Scalars['String']['input']>
  /** Максимум страниц блога для показа. */
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']['input']>
  /** Рубрика для записей по умолчанию. */
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']['input']>
  /** Формат записей по умолчанию. */
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']['input']>
  /** Преобразовывать смайлики наподобие :-) и :-P в картинки при показе. */
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload'
  /** Update all settings. */
  allSettings?: Maybe<Settings>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Update the discussion setting. */
  discussionSettings?: Maybe<DiscussionSettings>
  /** Update the general setting. */
  generalSettings?: Maybe<GeneralSettings>
  /** Update the reading setting. */
  readingSettings?: Maybe<ReadingSettings>
  /** Update the writing setting. */
  writingSettings?: Maybe<WritingSettings>
}

/** Input for the UpdateSkillCategory mutation */
export type UpdateSkillCategoryInput = {
  /** The slug that the skill_list will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the skill_list object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the SkillCategory object to update */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the skill_list object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** The ID of the skill_list that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the UpdateSkillCategory mutation */
export type UpdateSkillCategoryPayload = {
  __typename?: 'UpdateSkillCategoryPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created skill_list */
  skillCategory?: Maybe<SkillCategory>
}

/** Input for the updateSkill mutation */
export type UpdateSkillInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Skill object */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** Set connections between the Skill and postFormats */
  postFormats?: InputMaybe<SkillPostFormatsInput>
  /** Set connections between the Skill and SkillCategories */
  skillCategories?: InputMaybe<SkillSkillCategoriesInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateSkill mutation */
export type UpdateSkillPayload = {
  __typename?: 'UpdateSkillPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  skill?: Maybe<Skill>
}

/** Input for the updateSocialNetwork mutation */
export type UpdateSocialNetworkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the SocialNetwork object */
  id: Scalars['ID']['input']
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateSocialNetwork mutation */
export type UpdateSocialNetworkPayload = {
  __typename?: 'UpdateSocialNetworkPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  socialNetwork?: Maybe<SocialNetwork>
}

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the tag object to update */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the post_tag object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_tag */
  tag?: Maybe<Tag>
}

/** Input for the updateUser mutation */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** The ID of the user */
  id: Scalars['ID']['input']
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** A User object */
export type User = Commenter &
  DatabaseIdentifier &
  Node &
  UniformResourceIdentifiable & {
    __typename?: 'User'
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: Maybe<Avatar>
    /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
    capKey?: Maybe<Scalars['String']['output']>
    /** A list of capabilities (permissions) granted to the user */
    capabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** Connection between the User type and the Comment type */
    comments?: Maybe<UserToCommentConnection>
    /** Identifies the primary key from the database. */
    databaseId: Scalars['Int']['output']
    /** Description of the user. */
    description?: Maybe<Scalars['String']['output']>
    /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
    email?: Maybe<Scalars['String']['output']>
    /** Connection between the User type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>
    /** Connection between the User type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>
    /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
    extraCapabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
    firstName?: Maybe<Scalars['String']['output']>
    /** The globally unique identifier for the user object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
    lastName?: Maybe<Scalars['String']['output']>
    /** The preferred language locale set for the user. Value derived from get_user_locale(). */
    locale?: Maybe<Scalars['String']['output']>
    /** Connection between the User type and the mediaItem type */
    mediaItems?: Maybe<UserToMediaItemConnection>
    /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
    name?: Maybe<Scalars['String']['output']>
    /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
    nicename?: Maybe<Scalars['String']['output']>
    /** Nickname of the user. */
    nickname?: Maybe<Scalars['String']['output']>
    /** Connection between the User type and the page type */
    pages?: Maybe<UserToPageConnection>
    /** Connection between the User type and the post type */
    posts?: Maybe<UserToPostConnection>
    /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
    registeredDate?: Maybe<Scalars['String']['output']>
    /** Connection between the User and Revisions authored by the user */
    revisions?: Maybe<UserToContentRevisionUnionConnection>
    /** Connection between the User type and the UserRole type */
    roles?: Maybe<UserToUserRoleConnection>
    /** The Yoast SEO data of a user */
    seo?: Maybe<SeoUser>
    /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
    slug?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
    /** A website url that is associated with the user. */
    url?: Maybe<Scalars['String']['output']>
    /**
     * The Id of the user. Equivalent to WP_User-&gt;ID
     * @deprecated Deprecated in favor of the databaseId field
     */
    userId?: Maybe<Scalars['Int']['output']>
    /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
    username?: Maybe<Scalars['String']['output']>
  }

/** A User object */
export type UserAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']['input']>
  rating?: InputMaybe<AvatarRatingEnum>
  size?: InputMaybe<Scalars['Int']['input']>
}

/** A User object */
export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToCommentConnectionWhereArgs>
}

/** A User object */
export type UserEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** A User object */
export type UserEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** A User object */
export type UserMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToMediaItemConnectionWhereArgs>
}

/** A User object */
export type UserPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToPageConnectionWhereArgs>
}

/** A User object */
export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToPostConnectionWhereArgs>
}

/** A User object */
export type UserRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserToContentRevisionUnionConnectionWhereArgs>
}

/** A User object */
export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME',
}

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole'
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']['output']>
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** The registered name of the role */
  name?: Maybe<Scalars['String']['output']>
}

/** Names of available user roles */
export enum UserRoleEnum {
  /** User role with specific capabilities */
  Administrator = 'ADMINISTRATOR',
  /** User role with specific capabilities */
  Author = 'AUTHOR',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Customer = 'CUSTOMER',
  /** User role with specific capabilities */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  SeoEditor = 'SEO_EDITOR',
  /** User role with specific capabilities */
  SeoManager = 'SEO_MANAGER',
  /** User role with specific capabilities */
  ShopManager = 'SHOP_MANAGER',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER',
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = {
  __typename?: 'UserToCommentConnection'
  /** Edges for the UserToCommentConnection connection */
  edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
  __typename?: 'UserToCommentConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Comment>
}

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the User type and the ContentRevisionUnion type */
export type UserToContentRevisionUnionConnection = {
  __typename?: 'UserToContentRevisionUnionConnection'
  /** Edges for the UserToContentRevisionUnionConnection connection */
  edges?: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToContentRevisionUnionConnectionEdge = {
  __typename?: 'UserToContentRevisionUnionConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<ContentRevisionUnion>
}

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type UserToContentRevisionUnionConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = {
  __typename?: 'UserToEnqueuedScriptConnection'
  /** Edges for the UserToEnqueuedScriptConnection connection */
  edges?: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = {
  __typename?: 'UserToEnqueuedScriptConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedScript>
}

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = {
  __typename?: 'UserToEnqueuedStylesheetConnection'
  /** Edges for the UserToEnqueuedStylesheetConnection connection */
  edges?: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedStylesheet>
}

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = {
  __typename?: 'UserToMediaItemConnection'
  /** Edges for the UserToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MediaItem>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
  __typename?: 'UserToMediaItemConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<MediaItem>
}

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the page type */
export type UserToPageConnection = {
  __typename?: 'UserToPageConnection'
  /** Edges for the UserToPageConnection connection */
  edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Page>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToPageConnectionEdge = {
  __typename?: 'UserToPageConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Page>
}

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the post type */
export type UserToPostConnection = {
  __typename?: 'UserToPostConnection'
  /** Edges for the UserToPostConnection connection */
  edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToPostConnectionEdge = {
  __typename?: 'UserToPostConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<Post>
}

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = {
  __typename?: 'UserToUserRoleConnection'
  /** Edges for the UserToUserRoleConnection connection */
  edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<UserRole>>>
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = {
  __typename?: 'UserToUserRoleConnectionEdge'
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']['output']>
  /** The item at the end of the edge */
  node?: Maybe<UserRole>
}

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL',
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>
}

/** Column used for searching for users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user\s website. */
  Url = 'URL',
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
  __typename?: 'WPPageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Raw schema for page */
  seo?: Maybe<SeoPostTypePageInfo>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings'
  /** Рубрика для записей по умолчанию. */
  defaultCategory?: Maybe<Scalars['Int']['output']>
  /** Формат записей по умолчанию. */
  defaultPostFormat?: Maybe<Scalars['String']['output']>
  /** Преобразовывать смайлики наподобие :-) и :-P в картинки при показе. */
  useSmilies?: Maybe<Scalars['Boolean']['output']>
}

/** Zip */
export type ZipField = DatabaseIdentifier &
  FormField &
  Node & {
    __typename?: 'ZipField'
    /** Admin Label */
    adminLabel?: Maybe<Scalars['String']['output']>
    /** Custom Class Names */
    classes?: Maybe<ZipFieldClasses>
    /** Creation date */
    createdAt?: Maybe<Scalars['Int']['output']>
    /** Custom Mask */
    customMask?: Maybe<Scalars['String']['output']>
    /** Custom Name Attribute */
    customNameAttribute?: Maybe<Scalars['String']['output']>
    /** The Id of the field */
    databaseId: Scalars['Int']['output']
    /** Default Value */
    default?: Maybe<Scalars['String']['output']>
    /** Description */
    description?: Maybe<ZipFieldDescription>
    /** Disable Browser Autocomplete */
    disableBrowserAutocomplete?: Maybe<Scalars['Boolean']['output']>
    /** Disable Input */
    disableInput?: Maybe<Scalars['Boolean']['output']>
    /** The Id of the field */
    fieldId?: Maybe<Scalars['Int']['output']>
    /** Key of the field */
    fieldKey?: Maybe<Scalars['String']['output']>
    /** Label of the field */
    fieldLabel?: Maybe<Scalars['String']['output']>
    /** Help Text */
    help?: Maybe<ZipFieldHelp>
    /** The globally unique identifier of the field */
    id: Scalars['ID']['output']
    /** Limit Input to this Number */
    inputLimitSet?: Maybe<ZipFieldInputLimitSet>
    /** Field Key */
    key?: Maybe<Scalars['String']['output']>
    /** Label */
    label?: Maybe<Scalars['String']['output']>
    /** Label Position */
    labelPos?: Maybe<Scalars['String']['output']>
    /** manual_key */
    manualKey?: Maybe<Scalars['String']['output']>
    /** Input Mask */
    mask?: Maybe<Scalars['String']['output']>
    /** Position order of the field */
    order?: Maybe<Scalars['Int']['output']>
    /** Parent form id */
    parentId?: Maybe<Scalars['Int']['output']>
    /** This Field Is Personally Identifiable Data */
    personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
    /** Placeholder */
    placeholder?: Maybe<Scalars['String']['output']>
    /** Required Field */
    required?: Maybe<Scalars['Boolean']['output']>
    /** type of the field */
    type?: Maybe<Scalars['String']['output']>
    /** Update date */
    updatedAt?: Maybe<Scalars['Int']['output']>
  }

/** Custom Class Names */
export type ZipFieldClasses = {
  __typename?: 'ZipFieldClasses'
  /** Container */
  containerClass?: Maybe<Scalars['String']['output']>
  /** Element */
  elementClass?: Maybe<Scalars['String']['output']>
}

/** Description */
export type ZipFieldDescription = {
  __typename?: 'ZipFieldDescription'
  descText?: Maybe<Scalars['String']['output']>
}

/** Help Text */
export type ZipFieldHelp = {
  __typename?: 'ZipFieldHelp'
  helpText?: Maybe<Scalars['String']['output']>
}

/** Limit Input to this Number */
export type ZipFieldInputLimitSet = {
  __typename?: 'ZipFieldInputLimitSet'
  inputLimit?: Maybe<Scalars['String']['output']>
  /** Text to Appear After Counter */
  inputLimitMsg?: Maybe<Scalars['String']['output']>
  inputLimitType?: Maybe<Scalars['String']['output']>
}

export type GetFooterQueryVariables = Exact<{ [key: string]: never }>

export type GetFooterQuery = {
  __typename?: 'RootQuery'
  footerItems?: {
    __typename?: 'RootQueryToFooterItemConnection'
    nodes?: Array<{
      __typename?: 'FooterItem'
      contentAddons?: {
        __typename?: 'FooterItem_Contentaddons'
        title?: string | null
        role?: string | null
        content?: string | null
        excerpt?: string | null
      } | null
      language?: { __typename?: 'Language'; code?: LanguageCodeEnum | null } | null
    } | null> | null
  } | null
}

export type GetNavigationQueryVariables = Exact<{ [key: string]: never }>

export type GetNavigationQuery = {
  __typename?: 'RootQuery'
  navigationItems?: {
    __typename?: 'RootQueryToNavigationItemConnection'
    nodes?: Array<{
      __typename?: 'NavigationItem'
      contentAddons?: {
        __typename?: 'NavigationItem_Contentaddons'
        title?: string | null
        content?: string | null
        role?: string | null
      } | null
      language?: { __typename?: 'Language'; code?: LanguageCodeEnum | null } | null
    } | null> | null
  } | null
}

export type GetRecruitsQueryVariables = Exact<{ [key: string]: never }>

export type GetRecruitsQuery = {
  __typename?: 'RootQuery'
  recruits?: {
    __typename?: 'RootQueryToRecruitConnection'
    nodes?: Array<{
      __typename?: 'Recruit'
      title?: string | null
      featuredImage?: {
        __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge'
        node?: {
          __typename?: 'MediaItem'
          mediaItemUrl?: string | null
          title?: string | null
        } | null
      } | null
      language?: { __typename?: 'Language'; code?: LanguageCodeEnum | null } | null
    } | null> | null
  } | null
}

export type GetSeoQueryVariables = Exact<{
  uri: Scalars['String']['input']
}>

export type GetSeoQuery = {
  __typename?: 'RootQuery'
  pageBy?: {
    __typename?: 'Page'
    seo?: { __typename?: 'PostTypeSEO'; title?: string | null; metaDesc?: string | null } | null
    translation?: {
      __typename?: 'Page'
      seo?: { __typename?: 'PostTypeSEO'; title?: string | null; metaDesc?: string | null } | null
    } | null
  } | null
}

export type GetSkillsQueryVariables = Exact<{ [key: string]: never }>

export type GetSkillsQuery = {
  __typename?: 'RootQuery'
  skillCategories?: {
    __typename?: 'RootQueryToSkillCategoryConnection'
    nodes?: Array<{
      __typename?: 'SkillCategory'
      name?: string | null
      skillAddons?: {
        __typename?: 'SkillCategory_Skilladdons'
        icon?: { __typename?: 'MediaItem'; mediaItemUrl?: string | null } | null
      } | null
      skills?: {
        __typename?: 'SkillCategoryToSkillConnection'
        nodes?: Array<{
          __typename?: 'Skill'
          title?: string | null
          menuOrder?: number | null
          language?: { __typename?: 'Language'; code?: LanguageCodeEnum | null } | null
        } | null> | null
      } | null
    } | null> | null
  } | null
}

export const GetFooterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFooter' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'footerItems' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'contentAddons' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'language' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFooterQuery, GetFooterQueryVariables>
export const GetNavigationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetNavigation' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'navigationItems' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'contentAddons' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'language' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNavigationQuery, GetNavigationQueryVariables>
export const GetRecruitsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRecruits' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'recruits' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'featuredImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'mediaItemUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'language' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRecruitsQuery, GetRecruitsQueryVariables>
export const GetSeoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageBy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uri' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'metaDesc' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'translation' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'language' },
                      value: { kind: 'EnumValue', value: 'EN' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'seo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'metaDesc' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSeoQuery, GetSeoQueryVariables>
export const GetSkillsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSkills' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'skillCategories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'skillAddons' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'icon' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'mediaItemUrl' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'skills' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'menuOrder' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'language' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>
