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
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContentAddons & {
    __typename?: 'AboutItem'
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    aboutItemId: Scalars['Int']['output']
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Fields of the ContentAddons ACF Field Group */
    contentAddons?: Maybe<ContentAddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the about_fragments object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the about_fragments object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the about_fragments object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the AboutItem type and the AboutItem type */
    preview?: Maybe<AboutItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
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
export type AboutItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The AboutItem type */
export type AboutItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to AboutItem Nodes */
export type AboutItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected AboutItem Nodes */
  edges: Array<AboutItemConnectionEdge>
  /** A list of connected AboutItem Nodes */
  nodes: Array<AboutItem>
  /** Information about pagination in a connection. */
  pageInfo: AboutItemConnectionPageInfo
}

/** Edge between a Node and a connected AboutItem */
export type AboutItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected AboutItem Node */
  node: AboutItem
}

/** Page Info on the connected AboutItemConnectionEdge */
export type AboutItemConnectionPageInfo = {
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
export type AboutItemToPreviewConnectionEdge = AboutItemConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'AboutItemToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: AboutItem
  }

/** Connection between the CustomerReview_Fields type and the ContentNode type */
export type AcfContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'AcfContentNodeConnection'
    /** Edges for the AcfContentNodeConnection connection */
    edges: Array<AcfContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: AcfContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type AcfContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'AcfContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;AcfContentNodeConnection&quot; */
export type AcfContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'AcfContentNodeConnectionPageInfo'
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

/** A Field Group managed by ACF */
export type AcfFieldGroup = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Fields associated with an ACF Field Group */
export type AcfFieldGroupFields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
}

/** Connection between the ContentAddons_Fields type and the MediaItem type */
export type AcfMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'AcfMediaItemConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: MediaItem
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

/** The category type */
export type Category = DatabaseIdentifier &
  HierarchicalNode &
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
    /** Connection between the category type and its children categories. */
    children?: Maybe<CategoryToCategoryConnection>
    /** Connection between the Category type and the ContentNode type */
    contentNodes?: Maybe<CategoryToContentNodeConnection>
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
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** Connection between the category type and its parent category. */
    parent?: Maybe<CategoryToParentCategoryConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Category type and the post type */
    posts?: Maybe<CategoryToPostConnection>
    /** The Yoast SEO data of the Рубрики taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the Category type and the Taxonomy type */
    taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
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

/** Connection to category Nodes */
export type CategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected category Nodes */
  edges: Array<CategoryConnectionEdge>
  /** A list of connected category Nodes */
  nodes: Array<Category>
  /** Information about pagination in a connection. */
  pageInfo: CategoryConnectionPageInfo
}

/** Edge between a Node and a connected category */
export type CategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected category Node */
  node: Category
}

/** Page Info on the connected CategoryConnectionEdge */
export type CategoryConnectionPageInfo = {
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

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'CategoryToAncestorsCategoryConnection'
    /** Edges for the CategoryToAncestorsCategoryConnection connection */
    edges: Array<CategoryToAncestorsCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>
    /** Information about pagination in a connection. */
    pageInfo: CategoryToAncestorsCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'CategoryToAncestorsCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Category
  }

/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export type CategoryToAncestorsCategoryConnectionPageInfo = CategoryConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'CategoryToAncestorsCategoryConnectionPageInfo'
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

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'CategoryToCategoryConnection'
    /** Edges for the CategoryToCategoryConnection connection */
    edges: Array<CategoryToCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>
    /** Information about pagination in a connection. */
    pageInfo: CategoryToCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'CategoryToCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Category
  }

/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export type CategoryToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'CategoryToCategoryConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'CategoryToContentNodeConnection'
    /** Edges for the CategoryToContentNodeConnection connection */
    edges: Array<CategoryToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: CategoryToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'CategoryToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export type CategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'CategoryToContentNodeConnectionPageInfo'
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

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CategoryToParentCategoryConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Category
  }

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection &
  PostConnection & {
    __typename?: 'CategoryToPostConnection'
    /** Edges for the CategoryToPostConnection connection */
    edges: Array<CategoryToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: CategoryToPostConnectionPageInfo
  }

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'CategoryToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;CategoryToPostConnection&quot; */
export type CategoryToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'CategoryToPostConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'CategoryToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
  }

/** A Comment object */
export type Comment = DatabaseIdentifier &
  Node &
  UniformResourceIdentifiable & {
    __typename?: 'Comment'
    /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
    agent?: Maybe<Scalars['String']['output']>
    /**
     * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
     * @deprecated Deprecated in favor of the `status` field
     */
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
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']['output']>
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']['output']
    /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
    karma?: Maybe<Scalars['Int']['output']>
    /** The permalink of the comment */
    link?: Maybe<Scalars['String']['output']>
    /** Connection between the Comment type and the Comment type */
    parent?: Maybe<CommentToParentCommentConnectionEdge>
    /** The database id of the parent comment node or null if it is the root comment */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent comment node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Comment type and the Comment type */
    replies?: Maybe<CommentToCommentConnection>
    /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
    status?: Maybe<CommentStatusEnum>
    /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
    type?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
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
  DatabaseIdentifier &
  Node & {
    __typename?: 'CommentAuthor'
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: Maybe<Avatar>
    /** The unique identifier stored in the database */
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

/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']['input']>
  rating?: InputMaybe<AvatarRatingEnum>
  size?: InputMaybe<Scalars['Int']['input']>
}

/** Connection to Comment Nodes */
export type CommentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
  edges: Array<CommentConnectionEdge>
  /** A list of connected Comment Nodes */
  nodes: Array<Comment>
  /** Information about pagination in a connection. */
  pageInfo: CommentConnectionPageInfo
}

/** Edge between a Node and a connected Comment */
export type CommentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Comment Node */
  node: Comment
}

/** Page Info on the connected CommentConnectionEdge */
export type CommentConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export enum CommentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
}

/** The status of the comment object. */
export enum CommentStatusEnum {
  /** Comments with the Одобрен status */
  Approve = 'APPROVE',
  /** Comments with the Не одобрен status */
  Hold = 'HOLD',
  /** Comments with the Спам status */
  Spam = 'SPAM',
  /** Comments with the Удалён status */
  Trash = 'TRASH',
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'CommentToCommentConnection'
    /** Edges for the CommentToCommentConnection connection */
    edges: Array<CommentToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: CommentToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'CommentToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;CommentToCommentConnection&quot; */
export type CommentToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'CommentToCommentConnectionPageInfo'
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
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
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
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToCommenterConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Commenter
  }

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToContentNodeConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContentNode
  }

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToParentCommentConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Comment
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
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
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
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>
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

/** Edge between a Node and a connected Commenter */
export type CommenterConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Commenter Node */
  node: Commenter
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by approval status of the comment. */
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

/** The CommonFragment type */
export type CommonFragment = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'CommonFragment'
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    commonFragmentId: Scalars['Int']['output']
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the general_fragments object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the general_fragments object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the general_fragments object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the CommonFragment type and the CommonFragment type */
    preview?: Maybe<CommonFragmentToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The CommonFragment type */
export type CommonFragmentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The CommonFragment type */
export type CommonFragmentEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The CommonFragment type */
export type CommonFragmentEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The CommonFragment type */
export type CommonFragmentTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to CommonFragment Nodes */
export type CommonFragmentConnection = {
  /** A list of edges (relational context) between RootQuery and connected CommonFragment Nodes */
  edges: Array<CommonFragmentConnectionEdge>
  /** A list of connected CommonFragment Nodes */
  nodes: Array<CommonFragment>
  /** Information about pagination in a connection. */
  pageInfo: CommonFragmentConnectionPageInfo
}

/** Edge between a Node and a connected CommonFragment */
export type CommonFragmentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected CommonFragment Node */
  node: CommonFragment
}

/** Page Info on the connected CommonFragmentConnectionEdge */
export type CommonFragmentConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CommonFragmentIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the CommonFragment type and the CommonFragment type */
export type CommonFragmentToPreviewConnectionEdge = CommonFragmentConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommonFragmentToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: CommonFragment
  }

/** The confidentialityPolicy type */
export type ConfidentialityPolicy = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'ConfidentialityPolicy'
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    confidentialityPolicyId: Scalars['Int']['output']
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the new_privacy_policy object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the new_privacy_policy object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the new_privacy_policy object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the ConfidentialityPolicy type and the confidentialityPolicy type */
    preview?: Maybe<ConfidentialityPolicyToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The confidentialityPolicy type */
export type ConfidentialityPolicyContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The confidentialityPolicy type */
export type ConfidentialityPolicyEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The confidentialityPolicy type */
export type ConfidentialityPolicyEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The confidentialityPolicy type */
export type ConfidentialityPolicyTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to confidentialityPolicy Nodes */
export type ConfidentialityPolicyConnection = {
  /** A list of edges (relational context) between RootQuery and connected confidentialityPolicy Nodes */
  edges: Array<ConfidentialityPolicyConnectionEdge>
  /** A list of connected confidentialityPolicy Nodes */
  nodes: Array<ConfidentialityPolicy>
  /** Information about pagination in a connection. */
  pageInfo: ConfidentialityPolicyConnectionPageInfo
}

/** Edge between a Node and a connected confidentialityPolicy */
export type ConfidentialityPolicyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected confidentialityPolicy Node */
  node: ConfidentialityPolicy
}

/** Page Info on the connected ConfidentialityPolicyConnectionEdge */
export type ConfidentialityPolicyConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ConfidentialityPolicyIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the ConfidentialityPolicy type and the confidentialityPolicy type */
export type ConfidentialityPolicyToPreviewConnectionEdge = ConfidentialityPolicyConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'ConfidentialityPolicyToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ConfidentialityPolicy
  }

/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export type Connection = {
  /** A list of edges (relational context) between connected nodes */
  edges: Array<Edge>
  /** A list of connected nodes */
  nodes: Array<Node>
  /** Information about pagination in a connection. */
  pageInfo: PageInfo
}

/** The Contact type */
export type Contact = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Contact'
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    contactId: Scalars['Int']['output']
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the contacts object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the contacts object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the contacts object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the Contact type and the Contact type */
    preview?: Maybe<ContactToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The Contact type */
export type ContactContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Contact type */
export type ContactEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Contact type */
export type ContactEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Contact type */
export type ContactTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to Contact Nodes */
export type ContactConnection = {
  /** A list of edges (relational context) between RootQuery and connected Contact Nodes */
  edges: Array<ContactConnectionEdge>
  /** A list of connected Contact Nodes */
  nodes: Array<Contact>
  /** Information about pagination in a connection. */
  pageInfo: ContactConnectionPageInfo
}

/** Edge between a Node and a connected Contact */
export type ContactConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Contact Node */
  node: Contact
}

/** Page Info on the connected ContactConnectionEdge */
export type ContactConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContactIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
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
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContentAddons & {
    __typename?: 'ContactItem'
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    contactItemId: Scalars['Int']['output']
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Fields of the ContentAddons ACF Field Group */
    contentAddons?: Maybe<ContentAddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the contacts_fragment object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the contacts_fragment object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the contacts_fragment object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the ContactItem type and the ContactItem type */
    preview?: Maybe<ContactItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
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
export type ContactItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The ContactItem type */
export type ContactItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to ContactItem Nodes */
export type ContactItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContactItem Nodes */
  edges: Array<ContactItemConnectionEdge>
  /** A list of connected ContactItem Nodes */
  nodes: Array<ContactItem>
  /** Information about pagination in a connection. */
  pageInfo: ContactItemConnectionPageInfo
}

/** Edge between a Node and a connected ContactItem */
export type ContactItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected ContactItem Node */
  node: ContactItem
}

/** Page Info on the connected ContactItemConnectionEdge */
export type ContactItemConnectionPageInfo = {
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
export type ContactItemToPreviewConnectionEdge = ContactItemConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'ContactItemToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContactItem
  }

/** Connection between the Contact type and the Contact type */
export type ContactToPreviewConnectionEdge = ContactConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'ContactToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Contact
  }

/** The &quot;ContentAddons&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ContentAddons = AcfFieldGroup &
  AcfFieldGroupFields &
  ContentAddons_Fields & {
    __typename?: 'ContentAddons'
    /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
    content?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
    excerpt?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
    image?: Maybe<AcfMediaItemConnectionEdge>
    /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
    order?: Maybe<Scalars['Float']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
    role?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;ContentAddons&quot; Field Group */
export type ContentAddons_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
  content?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
  excerpt?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
  image?: Maybe<AcfMediaItemConnectionEdge>
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
  order?: Maybe<Scalars['Float']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
  role?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ContentAddons&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Nodes used to manage content */
export type ContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output']
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
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output']
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output']
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
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>
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

/** Connection to ContentNode Nodes */
export type ContentNodeConnection = {
  /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
  edges: Array<ContentNodeConnectionEdge>
  /** A list of connected ContentNode Nodes */
  nodes: Array<ContentNode>
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeConnectionPageInfo
}

/** Edge between a Node and a connected ContentNode */
export type ContentNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected ContentNode Node */
  node: ContentNode
}

/** Page Info on the connected ContentNodeConnectionEdge */
export type ContentNodeConnectionPageInfo = {
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
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'ContentNodeToContentTypeConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContentType
  }

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'ContentNodeToEditLastConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: User
  }

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'ContentNodeToEditLockConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The timestamp for when the node was last edited */
    lockTimestamp?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: User
  }

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'ContentNodeToEnqueuedScriptConnection'
    /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
    edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>
    /** Information about pagination in a connection. */
    pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo
  }

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedScript
  }

/** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */
export type ContentNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'ContentNodeToEnqueuedScriptConnectionPageInfo'
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

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'ContentNodeToEnqueuedStylesheetConnection'
    /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
    edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>
    /** Information about pagination in a connection. */
    pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo
  }

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
  }

/** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */
export type ContentNodeToEnqueuedStylesheetConnectionPageInfo =
  EnqueuedStylesheetConnectionPageInfo &
    PageInfo &
    WpPageInfo & {
      __typename?: 'ContentNodeToEnqueuedStylesheetConnectionPageInfo'
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
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
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

/** Connection to ContentType Nodes */
export type ContentTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
  edges: Array<ContentTypeConnectionEdge>
  /** A list of connected ContentType Nodes */
  nodes: Array<ContentType>
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeConnectionPageInfo
}

/** Edge between a Node and a connected ContentType */
export type ContentTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected ContentType Node */
  node: ContentType
}

/** Page Info on the connected ContentTypeConnectionEdge */
export type ContentTypeConnectionPageInfo = {
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

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  AboutFragments = 'ABOUT_FRAGMENTS',
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Contacts = 'CONTACTS',
  /** The Type of Content object */
  ContactsFragment = 'CONTACTS_FRAGMENT',
  /** The Type of Content object */
  Feedback = 'FEEDBACK',
  /** The Type of Content object */
  FooterFragments = 'FOOTER_FRAGMENTS',
  /** The Type of Content object */
  Fragment = 'FRAGMENT',
  /** The Type of Content object */
  GeneralFragments = 'GENERAL_FRAGMENTS',
  /** The Type of Content object */
  HeroFragments = 'HERO_FRAGMENTS',
  /** The Type of Content object */
  Main = 'MAIN',
  /** The Type of Content object */
  Messengers = 'MESSENGERS',
  /** The Type of Content object */
  Navigation = 'NAVIGATION',
  /** The Type of Content object */
  NewPrivacyPolicy = 'NEW_PRIVACY_POLICY',
  /** The Type of Content object */
  NotFound = 'NOT_FOUND',
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
export type ContentTypeToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'ContentTypeToContentNodeConnection'
    /** Edges for the ContentTypeToContentNodeConnection connection */
    edges: Array<ContentTypeToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: ContentTypeToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'ContentTypeToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export type ContentTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'ContentTypeToContentNodeConnectionPageInfo'
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

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type ContentTypeToTaxonomyConnection = Connection &
  TaxonomyConnection & {
    __typename?: 'ContentTypeToTaxonomyConnection'
    /** Edges for the ContentTypeToTaxonomyConnection connection */
    edges: Array<ContentTypeToTaxonomyConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Taxonomy>
    /** Information about pagination in a connection. */
    pageInfo: ContentTypeToTaxonomyConnectionPageInfo
  }

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge &
  TaxonomyConnectionEdge & {
    __typename?: 'ContentTypeToTaxonomyConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Taxonomy
  }

/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export type ContentTypeToTaxonomyConnectionPageInfo = PageInfo &
  TaxonomyConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'ContentTypeToTaxonomyConnectionPageInfo'
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

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Allowed Content Types of the RecruitList taxonomy. */
export enum ContentTypesOfRecruitListEnum {
  /** The Type of Content object */
  Recruit = 'RECRUIT',
}

/** Allowed Content Types of the ReviewList taxonomy. */
export enum ContentTypesOfReviewListEnum {
  /** The Type of Content object */
  Review = 'REVIEW',
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

/** Input for the createAboutItem mutation. */
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

/** The payload for the createAboutItem mutation. */
export type CreateAboutItemPayload = {
  __typename?: 'CreateAboutItemPayload'
  /** The Post object mutation type. */
  aboutItem?: Maybe<AboutItem>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the createCategory mutation. */
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

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload'
  /** The created category */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the createComment mutation. */
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
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']['input']>
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The comment that was created */
  comment?: Maybe<Comment>
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']['output']>
}

/** Input for the createCommonFragment mutation. */
export type CreateCommonFragmentInput = {
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

/** The payload for the createCommonFragment mutation. */
export type CreateCommonFragmentPayload = {
  __typename?: 'CreateCommonFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  commonFragment?: Maybe<CommonFragment>
}

/** Input for the createConfidentialityPolicy mutation. */
export type CreateConfidentialityPolicyInput = {
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

/** The payload for the createConfidentialityPolicy mutation. */
export type CreateConfidentialityPolicyPayload = {
  __typename?: 'CreateConfidentialityPolicyPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  confidentialityPolicy?: Maybe<ConfidentialityPolicy>
}

/** Input for the createContact mutation. */
export type CreateContactInput = {
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

/** Input for the createContactItem mutation. */
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

/** The payload for the createContactItem mutation. */
export type CreateContactItemPayload = {
  __typename?: 'CreateContactItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  contactItem?: Maybe<ContactItem>
}

/** The payload for the createContact mutation. */
export type CreateContactPayload = {
  __typename?: 'CreateContactPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  contact?: Maybe<Contact>
}

/** Input for the createFeedbackItem mutation. */
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

/** The payload for the createFeedbackItem mutation. */
export type CreateFeedbackItemPayload = {
  __typename?: 'CreateFeedbackItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  feedbackItem?: Maybe<FeedbackItem>
}

/** Input for the createFooterItem mutation. */
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

/** The payload for the createFooterItem mutation. */
export type CreateFooterItemPayload = {
  __typename?: 'CreateFooterItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  footerItem?: Maybe<FooterItem>
}

/** Input for the createFragment mutation. */
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

/** The payload for the createFragment mutation. */
export type CreateFragmentPayload = {
  __typename?: 'CreateFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  fragment?: Maybe<Fragment>
}

/** Input for the createHeroItem mutation. */
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

/** The payload for the createHeroItem mutation. */
export type CreateHeroItemPayload = {
  __typename?: 'CreateHeroItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  heroItem?: Maybe<HeroItem>
}

/** Input for the createMain mutation. */
export type CreateMainInput = {
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

/** The payload for the createMain mutation. */
export type CreateMainPayload = {
  __typename?: 'CreateMainPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  main?: Maybe<Main>
}

/** Input for the createMediaItem mutation. */
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
  /** The ID of the parent object */
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

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the createMessenger mutation. */
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

/** The payload for the createMessenger mutation. */
export type CreateMessengerPayload = {
  __typename?: 'CreateMessengerPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  messenger?: Maybe<Messenger>
}

/** Input for the createNavigationItem mutation. */
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

/** The payload for the createNavigationItem mutation. */
export type CreateNavigationItemPayload = {
  __typename?: 'CreateNavigationItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the createNotFound mutation. */
export type CreateNotFoundInput = {
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

/** The payload for the createNotFound mutation. */
export type CreateNotFoundPayload = {
  __typename?: 'CreateNotFoundPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  notFound?: Maybe<NotFound>
}

/** Input for the createPage mutation. */
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

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  page?: Maybe<Page>
}

/** Input for the createPostFormat mutation. */
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

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_format */
  postFormat?: Maybe<PostFormat>
}

/** Input for the createPost mutation. */
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

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  post?: Maybe<Post>
}

/** Input for the createPrivacyPolicyItem mutation. */
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

/** The payload for the createPrivacyPolicyItem mutation. */
export type CreatePrivacyPolicyItemPayload = {
  __typename?: 'CreatePrivacyPolicyItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  privacyPolicyItem?: Maybe<PrivacyPolicyItem>
}

/** Input for the createRecruit mutation. */
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
  /** Set connections between the Recruit and recruitLists */
  recruitLists?: InputMaybe<RecruitRecruitListsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Input for the createRecruitList mutation. */
export type CreateRecruitListInput = {
  /** The slug that the recruit_list will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the recruit_list object */
  description?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the recruit_list object to mutate */
  name: Scalars['String']['input']
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createRecruitList mutation. */
export type CreateRecruitListPayload = {
  __typename?: 'CreateRecruitListPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created recruit_list */
  recruitList?: Maybe<RecruitList>
}

/** The payload for the createRecruit mutation. */
export type CreateRecruitPayload = {
  __typename?: 'CreateRecruitPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  recruit?: Maybe<Recruit>
}

/** Input for the createReview mutation. */
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
  /** Set connections between the review and reviewLists */
  reviewLists?: InputMaybe<ReviewReviewListsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Input for the createReviewList mutation. */
export type CreateReviewListInput = {
  /** The slug that the review_list will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the review_list object */
  description?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the review_list object to mutate */
  name: Scalars['String']['input']
  /** The ID of the review_list that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createReviewList mutation. */
export type CreateReviewListPayload = {
  __typename?: 'CreateReviewListPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created review_list */
  reviewList?: Maybe<ReviewList>
}

/** The payload for the createReview mutation. */
export type CreateReviewPayload = {
  __typename?: 'CreateReviewPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  review?: Maybe<Review>
}

/** Input for the createSkillCategory mutation. */
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

/** The payload for the createSkillCategory mutation. */
export type CreateSkillCategoryPayload = {
  __typename?: 'CreateSkillCategoryPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created skill_list */
  skillCategory?: Maybe<SkillCategory>
}

/** Input for the createSkill mutation. */
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
  /** Set connections between the Skill and SkillCategories */
  skillCategories?: InputMaybe<SkillSkillCategoriesInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the createSkill mutation. */
export type CreateSkillPayload = {
  __typename?: 'CreateSkillPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  skill?: Maybe<Skill>
}

/** Input for the createSocialNetwork mutation. */
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

/** The payload for the createSocialNetwork mutation. */
export type CreateSocialNetworkPayload = {
  __typename?: 'CreateSocialNetworkPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  socialNetwork?: Maybe<SocialNetwork>
}

/** Input for the createTag mutation. */
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

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_tag */
  tag?: Maybe<Tag>
}

/** Input for the createUser mutation. */
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

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** The &quot;CustomerReview&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type CustomerReview = AcfFieldGroup &
  AcfFieldGroupFields &
  CustomerReview_Fields & {
    __typename?: 'CustomerReview'
    /** Состав ссылки: https:// + domain + .zone */
    companyLink?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Выберите с кем работали */
    position?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** Имя, оставляющего отзыв, человека */
    respondent?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;CustomerReview&quot; Field Group */
    skills?: Maybe<AcfContentNodeConnection>
  }

/** The &quot;CustomerReview&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type CustomerReviewSkillsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Interface representing fields of the ACF &quot;CustomerReview&quot; Field Group */
export type CustomerReview_Fields = {
  /** Состав ссылки: https:// + domain + .zone */
  companyLink?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Выберите с кем работали */
  position?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** Имя, оставляющего отзыв, человека */
  respondent?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;CustomerReview&quot; Field Group */
  skills?: Maybe<AcfContentNodeConnection>
}

/** Interface representing fields of the ACF &quot;CustomerReview&quot; Field Group */
export type CustomerReview_FieldsSkillsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
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

/** Input for the deleteAboutItem mutation. */
export type DeleteAboutItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the AboutItem to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteAboutItem mutation. */
export type DeleteAboutItemPayload = {
  __typename?: 'DeleteAboutItemPayload'
  /** The object before it was deleted */
  aboutItem?: Maybe<AboutItem>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the category to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload'
  /** The deleted term object */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The deleted comment ID */
  id: Scalars['ID']['input']
}

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The deleted comment object */
  comment?: Maybe<Comment>
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteCommonFragment mutation. */
export type DeleteCommonFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the CommonFragment to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteCommonFragment mutation. */
export type DeleteCommonFragmentPayload = {
  __typename?: 'DeleteCommonFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The object before it was deleted */
  commonFragment?: Maybe<CommonFragment>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteConfidentialityPolicy mutation. */
export type DeleteConfidentialityPolicyInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the confidentialityPolicy to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteConfidentialityPolicy mutation. */
export type DeleteConfidentialityPolicyPayload = {
  __typename?: 'DeleteConfidentialityPolicyPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The object before it was deleted */
  confidentialityPolicy?: Maybe<ConfidentialityPolicy>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteContact mutation. */
export type DeleteContactInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Contact to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** Input for the deleteContactItem mutation. */
export type DeleteContactItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the ContactItem to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteContactItem mutation. */
export type DeleteContactItemPayload = {
  __typename?: 'DeleteContactItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The object before it was deleted */
  contactItem?: Maybe<ContactItem>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** The payload for the deleteContact mutation. */
export type DeleteContactPayload = {
  __typename?: 'DeleteContactPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The object before it was deleted */
  contact?: Maybe<Contact>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
}

/** Input for the deleteFeedbackItem mutation. */
export type DeleteFeedbackItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the FeedbackItem to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteFeedbackItem mutation. */
export type DeleteFeedbackItemPayload = {
  __typename?: 'DeleteFeedbackItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  feedbackItem?: Maybe<FeedbackItem>
}

/** Input for the deleteFooterItem mutation. */
export type DeleteFooterItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the FooterItem to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteFooterItem mutation. */
export type DeleteFooterItemPayload = {
  __typename?: 'DeleteFooterItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  footerItem?: Maybe<FooterItem>
}

/** Input for the deleteFragment mutation. */
export type DeleteFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Fragment to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteFragment mutation. */
export type DeleteFragmentPayload = {
  __typename?: 'DeleteFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  fragment?: Maybe<Fragment>
}

/** Input for the deleteHeroItem mutation. */
export type DeleteHeroItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the HeroItem to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteHeroItem mutation. */
export type DeleteHeroItemPayload = {
  __typename?: 'DeleteHeroItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  heroItem?: Maybe<HeroItem>
}

/** Input for the deleteMain mutation. */
export type DeleteMainInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Main to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteMain mutation. */
export type DeleteMainPayload = {
  __typename?: 'DeleteMainPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  main?: Maybe<Main>
}

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the mediaItem to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the deleteMessenger mutation. */
export type DeleteMessengerInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Messenger to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteMessenger mutation. */
export type DeleteMessengerPayload = {
  __typename?: 'DeleteMessengerPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  messenger?: Maybe<Messenger>
}

/** Input for the deleteNavigationItem mutation. */
export type DeleteNavigationItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the NavigationItem to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteNavigationItem mutation. */
export type DeleteNavigationItemPayload = {
  __typename?: 'DeleteNavigationItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the deleteNotFound mutation. */
export type DeleteNotFoundInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the NotFound to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteNotFound mutation. */
export type DeleteNotFoundPayload = {
  __typename?: 'DeleteNotFoundPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  notFound?: Maybe<NotFound>
}

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the page to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  page?: Maybe<Page>
}

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the postFormat to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted term object */
  postFormat?: Maybe<PostFormat>
}

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the post to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  post?: Maybe<Post>
}

/** Input for the deletePrivacyPolicyItem mutation. */
export type DeletePrivacyPolicyItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the PrivacyPolicyItem to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deletePrivacyPolicyItem mutation. */
export type DeletePrivacyPolicyItemPayload = {
  __typename?: 'DeletePrivacyPolicyItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  privacyPolicyItem?: Maybe<PrivacyPolicyItem>
}

/** Input for the deleteRecruit mutation. */
export type DeleteRecruitInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Recruit to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** Input for the deleteRecruitList mutation. */
export type DeleteRecruitListInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the recruitList to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteRecruitList mutation. */
export type DeleteRecruitListPayload = {
  __typename?: 'DeleteRecruitListPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted term object */
  recruitList?: Maybe<RecruitList>
}

/** The payload for the deleteRecruit mutation. */
export type DeleteRecruitPayload = {
  __typename?: 'DeleteRecruitPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  recruit?: Maybe<Recruit>
}

/** Input for the deleteReview mutation. */
export type DeleteReviewInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the review to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** Input for the deleteReviewList mutation. */
export type DeleteReviewListInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the reviewList to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteReviewList mutation. */
export type DeleteReviewListPayload = {
  __typename?: 'DeleteReviewListPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted term object */
  reviewList?: Maybe<ReviewList>
}

/** The payload for the deleteReview mutation. */
export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  review?: Maybe<Review>
}

/** Input for the deleteSkillCategory mutation. */
export type DeleteSkillCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the SkillCategory to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteSkillCategory mutation. */
export type DeleteSkillCategoryPayload = {
  __typename?: 'DeleteSkillCategoryPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted term object */
  skillCategory?: Maybe<SkillCategory>
}

/** Input for the deleteSkill mutation. */
export type DeleteSkillInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the Skill to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteSkill mutation. */
export type DeleteSkillPayload = {
  __typename?: 'DeleteSkillPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  skill?: Maybe<Skill>
}

/** Input for the deleteSocialNetwork mutation. */
export type DeleteSocialNetworkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>
  /** The ID of the SocialNetwork to delete */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the deleteSocialNetwork mutation. */
export type DeleteSocialNetworkPayload = {
  __typename?: 'DeleteSocialNetworkPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The object before it was deleted */
  socialNetwork?: Maybe<SocialNetwork>
}

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the tag to delete */
  id: Scalars['ID']['input']
}

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']['output']>
  /** The deleted term object */
  tag?: Maybe<Tag>
}

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the user you want to delete */
  id: Scalars['ID']['input']
  /** Reassign posts and links to new User ID. */
  reassignId?: InputMaybe<Scalars['ID']['input']>
}

/** The payload for the deleteUser mutation. */
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

/** Relational context between connected nodes */
export type Edge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected node */
  node: Node
}

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** The inline code to be run after the asset is loaded. */
  after?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  args?: Maybe<Scalars['Boolean']['output']>
  /** The inline code to be run before the asset is loaded. */
  before?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  conditional?: Maybe<Scalars['String']['output']>
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedAsset>>>
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
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
    /** The inline code to be run after the asset is loaded. */
    after?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /**
     * Deprecated
     * @deprecated Use `EnqueuedAsset.media` instead.
     */
    args?: Maybe<Scalars['Boolean']['output']>
    /** The inline code to be run before the asset is loaded. */
    before?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional?: Maybe<Scalars['String']['output']>
    /** Dependencies needed to use this asset */
    dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>
    /**
     * Extra information needed for the script
     * @deprecated Use `EnqueuedScript.extraData` instead.
     */
    extra?: Maybe<Scalars['String']['output']>
    /** Extra data supplied to the enqueued script */
    extraData?: Maybe<Scalars['String']['output']>
    /** The handle of the enqueued asset */
    handle?: Maybe<Scalars['String']['output']>
    /** The global ID of the enqueued script */
    id: Scalars['ID']['output']
    /** The source of the asset */
    src?: Maybe<Scalars['String']['output']>
    /** The loading strategy to use on the script tag */
    strategy?: Maybe<ScriptLoadingStrategyEnum>
    /** The version of the enqueued script */
    version?: Maybe<Scalars['String']['output']>
  }

/** Connection to EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
  edges: Array<EnqueuedScriptConnectionEdge>
  /** A list of connected EnqueuedScript Nodes */
  nodes: Array<EnqueuedScript>
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedScriptConnectionPageInfo
}

/** Edge between a Node and a connected EnqueuedScript */
export type EnqueuedScriptConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected EnqueuedScript Node */
  node: EnqueuedScript
}

/** Page Info on the connected EnqueuedScriptConnectionEdge */
export type EnqueuedScriptConnectionPageInfo = {
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

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset &
  Node & {
    __typename?: 'EnqueuedStylesheet'
    /** The inline code to be run after the asset is loaded. */
    after?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /**
     * Deprecated
     * @deprecated Use `EnqueuedAsset.media` instead.
     */
    args?: Maybe<Scalars['Boolean']['output']>
    /** The inline code to be run before the asset is loaded. */
    before?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional?: Maybe<Scalars['String']['output']>
    /** Dependencies needed to use this asset */
    dependencies?: Maybe<Array<Maybe<EnqueuedStylesheet>>>
    /**
     * Extra information needed for the script
     * @deprecated Use `EnqueuedScript.extraData` instead.
     */
    extra?: Maybe<Scalars['String']['output']>
    /** The handle of the enqueued asset */
    handle?: Maybe<Scalars['String']['output']>
    /** The global ID of the enqueued stylesheet */
    id: Scalars['ID']['output']
    /** Whether the enqueued style is RTL or not */
    isRtl?: Maybe<Scalars['Boolean']['output']>
    /** The media attribute to use for the link */
    media?: Maybe<Scalars['String']['output']>
    /** The absolute path to the enqueued style. Set when the stylesheet is meant to load inline. */
    path?: Maybe<Scalars['String']['output']>
    /** The `rel` attribute to use for the link */
    rel?: Maybe<Scalars['String']['output']>
    /** The source of the asset */
    src?: Maybe<Scalars['String']['output']>
    /** Optional suffix, used in combination with RTL */
    suffix?: Maybe<Scalars['String']['output']>
    /** The title of the enqueued style. Used for preferred/alternate stylesheets. */
    title?: Maybe<Scalars['String']['output']>
    /** The version of the enqueued style */
    version?: Maybe<Scalars['String']['output']>
  }

/** Connection to EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
  edges: Array<EnqueuedStylesheetConnectionEdge>
  /** A list of connected EnqueuedStylesheet Nodes */
  nodes: Array<EnqueuedStylesheet>
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedStylesheetConnectionPageInfo
}

/** Edge between a Node and a connected EnqueuedStylesheet */
export type EnqueuedStylesheetConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected EnqueuedStylesheet Node */
  node: EnqueuedStylesheet
}

/** Page Info on the connected EnqueuedStylesheetConnectionEdge */
export type EnqueuedStylesheetConnectionPageInfo = {
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

/** The FeedbackItem type */
export type FeedbackItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContentAddons & {
    __typename?: 'FeedbackItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Fields of the ContentAddons ACF Field Group */
    contentAddons?: Maybe<ContentAddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    feedbackItemId: Scalars['Int']['output']
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** Whether the feedback object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the feedback object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the feedback object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the FeedbackItem type and the FeedbackItem type */
    preview?: Maybe<FeedbackItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
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
export type FeedbackItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The FeedbackItem type */
export type FeedbackItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to FeedbackItem Nodes */
export type FeedbackItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected FeedbackItem Nodes */
  edges: Array<FeedbackItemConnectionEdge>
  /** A list of connected FeedbackItem Nodes */
  nodes: Array<FeedbackItem>
  /** Information about pagination in a connection. */
  pageInfo: FeedbackItemConnectionPageInfo
}

/** Edge between a Node and a connected FeedbackItem */
export type FeedbackItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected FeedbackItem Node */
  node: FeedbackItem
}

/** Page Info on the connected FeedbackItemConnectionEdge */
export type FeedbackItemConnectionPageInfo = {
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
export type FeedbackItemToPreviewConnectionEdge = Edge &
  FeedbackItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'FeedbackItemToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: FeedbackItem
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

/** The FooterItem type */
export type FooterItem = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContentAddons & {
    __typename?: 'FooterItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Fields of the ContentAddons ACF Field Group */
    contentAddons?: Maybe<ContentAddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    footerItemId: Scalars['Int']['output']
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** Whether the footer_fragments object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the footer_fragments object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the footer_fragments object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the FooterItem type and the FooterItem type */
    preview?: Maybe<FooterItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
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
export type FooterItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The FooterItem type */
export type FooterItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to FooterItem Nodes */
export type FooterItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected FooterItem Nodes */
  edges: Array<FooterItemConnectionEdge>
  /** A list of connected FooterItem Nodes */
  nodes: Array<FooterItem>
  /** Information about pagination in a connection. */
  pageInfo: FooterItemConnectionPageInfo
}

/** Edge between a Node and a connected FooterItem */
export type FooterItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected FooterItem Node */
  node: FooterItem
}

/** Page Info on the connected FooterItemConnectionEdge */
export type FooterItemConnectionPageInfo = {
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
export type FooterItemToPreviewConnectionEdge = Edge &
  FooterItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'FooterItemToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: FooterItem
  }

/** The form object */
export type Form = DatabaseIdentifier &
  Node & {
    __typename?: 'Form'
    /** Добавить кнопку «Отправить» */
    addSubmit?: Maybe<Scalars['Boolean']['output']>
    /** Разрешить открытую ссылку? */
    allowPublicLink?: Maybe<Scalars['Boolean']['output']>
    /** Пользовательские имена классов */
    classes?: Maybe<FormClasses>
    /** Очистить успешно заполненную форму? */
    clearComplete?: Maybe<Scalars['Boolean']['output']>
    /** Валюта */
    currency?: Maybe<Scalars['String']['output']>
    /** Настраиваемая этикетка */
    customMessages?: Maybe<FormCustomMessages>
    /** The Id of the form */
    databaseId: Scalars['Int']['output']
    /** Позиция метки по умолчанию */
    defaultLabelPos?: Maybe<Scalars['String']['output']>
    /** Встройте свою форму */
    embedForm?: Maybe<Scalars['String']['output']>
    /** Connection between the Form type and the FormField type */
    fields?: Maybe<FormToFormFieldConnection>
    /** The Id of the form */
    formId?: Maybe<Scalars['Int']['output']>
    /** Form Title Heading Level */
    formTitleHeadingLevel?: Maybe<Scalars['String']['output']>
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
    /** Ссылка на вашу форму */
    publicLink?: Maybe<Scalars['String']['output']>
    /** The Locale of the form */
    seqNum?: Maybe<Scalars['Int']['output']>
    /** Отобразить название формы */
    showTitle?: Maybe<Scalars['Boolean']['output']>
    /** Название формы */
    title?: Maybe<Scalars['String']['output']>
    /** Уникальное поле */
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

/** Connection to Form Nodes */
export type FormConnection = {
  /** A list of edges (relational context) between RootQuery and connected Form Nodes */
  edges: Array<FormConnectionEdge>
  /** A list of connected Form Nodes */
  nodes: Array<Form>
  /** Information about pagination in a connection. */
  pageInfo: FormConnectionPageInfo
}

/** Edge between a Node and a connected Form */
export type FormConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Form Node */
  node: Form
}

/** Page Info on the connected FormConnectionEdge */
export type FormConnectionPageInfo = {
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

/** Настраиваемая этикетка */
export type FormCustomMessages = {
  __typename?: 'FormCustomMessages'
  /** Введите действительную дату! */
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
  databaseId?: Maybe<Scalars['Int']['output']>
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
  /** Position of the label */
  labelPos?: Maybe<Scalars['String']['output']>
  /** Position order of the field */
  order?: Maybe<Scalars['Int']['output']>
  /** Parent form id */
  parentId?: Maybe<Scalars['Int']['output']>
  /** Identifiable? */
  personallyIdentifiable?: Maybe<Scalars['Boolean']['output']>
  /** The field is required? */
  required?: Maybe<Scalars['Boolean']['output']>
  /** type of the field */
  type?: Maybe<Scalars['String']['output']>
  /** Update date */
  updatedAt?: Maybe<Scalars['Int']['output']>
}

/** Connection to FormField Nodes */
export type FormFieldConnection = {
  /** A list of edges (relational context) between Form and connected FormField Nodes */
  edges: Array<FormFieldConnectionEdge>
  /** A list of connected FormField Nodes */
  nodes: Array<FormField>
  /** Information about pagination in a connection. */
  pageInfo: FormFieldConnectionPageInfo
}

/** Edge between a Node and a connected FormField */
export type FormFieldConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected FormField Node */
  node: FormField
}

/** Page Info on the connected FormFieldConnectionEdge */
export type FormFieldConnectionPageInfo = {
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
export type FormToFormFieldConnection = Connection &
  FormFieldConnection & {
    __typename?: 'FormToFormFieldConnection'
    /** Edges for the FormToFormFieldConnection connection */
    edges: Array<FormToFormFieldConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<FormField>
    /** Information about pagination in a connection. */
    pageInfo: FormToFormFieldConnectionPageInfo
  }

/** An edge in a connection */
export type FormToFormFieldConnectionEdge = Edge &
  FormFieldConnectionEdge & {
    __typename?: 'FormToFormFieldConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: FormField
  }

/** Page Info on the &quot;FormToFormFieldConnection&quot; */
export type FormToFormFieldConnectionPageInfo = FormFieldConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'FormToFormFieldConnectionPageInfo'
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

/** Уникальное поле */
export type FormUniqueFieldSet = {
  __typename?: 'FormUniqueFieldSet'
  /** unique_field */
  uniqueField?: Maybe<Scalars['String']['output']>
  /** Уникальное сообщение об ошибке поля */
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
  Previewable &
  UniformResourceIdentifiable &
  WithAcfFragments & {
    __typename?: 'Fragment'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Fields of the Fragments ACF Field Group */
    fragments?: Maybe<Fragments>
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']['output']>
    /** Whether the fragment object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the fragment object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the fragment object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the Fragment type and the Fragment type */
    preview?: Maybe<FragmentToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
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
export type FragmentTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Fragment type */
export type FragmentTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to Fragment Nodes */
export type FragmentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Fragment Nodes */
  edges: Array<FragmentConnectionEdge>
  /** A list of connected Fragment Nodes */
  nodes: Array<Fragment>
  /** Information about pagination in a connection. */
  pageInfo: FragmentConnectionPageInfo
}

/** Edge between a Node and a connected Fragment */
export type FragmentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Fragment Node */
  node: Fragment
}

/** Page Info on the connected FragmentConnectionEdge */
export type FragmentConnectionPageInfo = {
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
export type FragmentToPreviewConnectionEdge = Edge &
  FragmentConnectionEdge &
  OneToOneConnection & {
    __typename?: 'FragmentToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Fragment
  }

/** The &quot;Fragments&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Fragments = AcfFieldGroup &
  AcfFieldGroupFields &
  Fragments_Fields & {
    __typename?: 'Fragments'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Fragments&quot; Field Group */
    reverse?: Maybe<Scalars['Boolean']['output']>
  }

/** Interface representing fields of the ACF &quot;Fragments&quot; Field Group */
export type Fragments_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Fragments&quot; Field Group */
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
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContentAddons & {
    __typename?: 'HeroItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Fields of the ContentAddons ACF Field Group */
    contentAddons?: Maybe<ContentAddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the hero_fragments object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    heroItemId: Scalars['Int']['output']
    /** The globally unique identifier of the hero_fragments object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the hero_fragments object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the HeroItem type and the HeroItem type */
    preview?: Maybe<HeroItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
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
export type HeroItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The HeroItem type */
export type HeroItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to HeroItem Nodes */
export type HeroItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected HeroItem Nodes */
  edges: Array<HeroItemConnectionEdge>
  /** A list of connected HeroItem Nodes */
  nodes: Array<HeroItem>
  /** Information about pagination in a connection. */
  pageInfo: HeroItemConnectionPageInfo
}

/** Edge between a Node and a connected HeroItem */
export type HeroItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected HeroItem Node */
  node: HeroItem
}

/** Page Info on the connected HeroItemConnectionEdge */
export type HeroItemConnectionPageInfo = {
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
export type HeroItemToPreviewConnectionEdge = Edge &
  HeroItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'HeroItemToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: HeroItem
  }

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output']
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
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output']
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output']
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
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
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

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection'
    /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
    edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo
  }

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge =
  ContentNodeConnectionEdge &
    Edge & {
      __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge'
      /** A cursor for use in pagination */
      cursor?: Maybe<Scalars['String']['output']>
      /** The item at the end of the edge */
      node: ContentNode
    }

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo =
  ContentNodeConnectionPageInfo &
    PageInfo &
    WpPageInfo & {
      __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo'
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

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type HierarchicalContentNodeToContentNodeChildrenConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection'
    /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
    edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo
  }

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo =
  ContentNodeConnectionPageInfo &
    PageInfo &
    WpPageInfo & {
      __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo'
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

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContentNode
  }

/** Node with hierarchical (parent/child) relationships */
export type HierarchicalNode = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>
}

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
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
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output']
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
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

/** The Main type */
export type Main = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable &
  WithAcfReviews & {
    __typename?: 'Main'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the main object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the main object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    mainId: Scalars['Int']['output']
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']['output']>
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']['output']>
    /** The password for the main object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the Main type and the Main type */
    preview?: Maybe<MainToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** Fields of the Reviews ACF Field Group */
    reviews?: Maybe<Reviews>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The Main type */
export type MainContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The Main type */
export type MainEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Main type */
export type MainEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The Main type */
export type MainTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to Main Nodes */
export type MainConnection = {
  /** A list of edges (relational context) between RootQuery and connected Main Nodes */
  edges: Array<MainConnectionEdge>
  /** A list of connected Main Nodes */
  nodes: Array<Main>
  /** Information about pagination in a connection. */
  pageInfo: MainConnectionPageInfo
}

/** Edge between a Node and a connected Main */
export type MainConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Main Node */
  node: Main
}

/** Page Info on the connected MainConnectionEdge */
export type MainConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MainIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the Main type and the Main type */
export type MainToPreviewConnectionEdge = Edge &
  MainConnectionEdge &
  OneToOneConnection & {
    __typename?: 'MainToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Main
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

/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
  exclude?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>
  include?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>
}

/** The mediaItem type */
export type MediaItem = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  HierarchicalNode &
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
    /** Connection between the MediaItem type and the Comment type */
    comments?: Maybe<MediaItemToCommentConnection>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the attachment object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the attachment object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the attachment object. */
    password?: Maybe<Scalars['String']['output']>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
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
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
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
export type MediaItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to mediaItem Nodes */
export type MediaItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
  edges: Array<MediaItemConnectionEdge>
  /** A list of connected mediaItem Nodes */
  nodes: Array<MediaItem>
  /** Information about pagination in a connection. */
  pageInfo: MediaItemConnectionPageInfo
}

/** Edge between a Node and a connected mediaItem */
export type MediaItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected mediaItem Node */
  node: MediaItem
}

/** Page Info on the connected MediaItemConnectionEdge */
export type MediaItemConnectionPageInfo = {
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

/** Connection between the MediaItem type and the Comment type */
export type MediaItemToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'MediaItemToCommentConnection'
    /** Edges for the MediaItemToCommentConnection connection */
    edges: Array<MediaItemToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: MediaItemToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'MediaItemToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
export type MediaItemToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'MediaItemToCommentConnectionPageInfo'
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
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
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

/** Connection to Menu Nodes */
export type MenuConnection = {
  /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
  edges: Array<MenuConnectionEdge>
  /** A list of connected Menu Nodes */
  nodes: Array<Menu>
  /** Information about pagination in a connection. */
  pageInfo: MenuConnectionPageInfo
}

/** Edge between a Node and a connected Menu */
export type MenuConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Menu Node */
  node: Menu
}

/** Page Info on the connected MenuConnectionEdge */
export type MenuConnectionPageInfo = {
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
    /** The uri of the resource the menu item links to */
    uri?: Maybe<Scalars['String']['output']>
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

/** Connection to MenuItem Nodes */
export type MenuItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
  edges: Array<MenuItemConnectionEdge>
  /** A list of connected MenuItem Nodes */
  nodes: Array<MenuItem>
  /** Information about pagination in a connection. */
  pageInfo: MenuItemConnectionPageInfo
}

/** Edge between a Node and a connected MenuItem */
export type MenuItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected MenuItem Node */
  node: MenuItem
}

/** Page Info on the connected MenuItemConnectionEdge */
export type MenuItemConnectionPageInfo = {
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

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output']
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output']
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output']
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Edge between a Node and a connected MenuItemLinkable */
export type MenuItemLinkableConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected MenuItemLinkable Node */
  node: MenuItemLinkable
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
  | CommonFragment
  | ConfidentialityPolicy
  | Contact
  | ContactItem
  | FeedbackItem
  | FooterItem
  | Fragment
  | HeroItem
  | Main
  | Messenger
  | NavigationItem
  | NotFound
  | Page
  | Post
  | PrivacyPolicyItem
  | Recruit
  | RecruitList
  | Review
  | ReviewList
  | Skill
  | SkillCategory
  | SocialNetwork
  | Tag

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge &
  MenuConnectionEdge &
  OneToOneConnection & {
    __typename?: 'MenuItemToMenuConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Menu
  }

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'MenuItemToMenuItemConnection'
    /** Edges for the MenuItemToMenuItemConnection connection */
    edges: Array<MenuItemToMenuItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>
    /** Information about pagination in a connection. */
    pageInfo: MenuItemToMenuItemConnectionPageInfo
  }

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'MenuItemToMenuItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MenuItem
  }

/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export type MenuItemToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'MenuItemToMenuItemConnectionPageInfo'
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

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>
}

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge &
  MenuItemLinkableConnectionEdge &
  OneToOneConnection & {
    __typename?: 'MenuItemToMenuItemLinkableConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: MenuItemLinkable
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
  /** Identify a menu node by the slug of menu location to which it is assigned */
  Location = 'LOCATION',
  /** Identify a menu node by its name */
  Name = 'NAME',
  /** Identify a menu node by its slug */
  Slug = 'SLUG',
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'MenuToMenuItemConnection'
    /** Edges for the MenuToMenuItemConnection connection */
    edges: Array<MenuToMenuItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>
    /** Information about pagination in a connection. */
    pageInfo: MenuToMenuItemConnectionPageInfo
  }

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'MenuToMenuItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MenuItem
  }

/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export type MenuToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'MenuToMenuItemConnectionPageInfo'
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

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
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
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Messenger'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the messengers object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the messengers object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the messengers object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the Messenger type and the Messenger type */
    preview?: Maybe<MessengerToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
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

/** Connection to Messenger Nodes */
export type MessengerConnection = {
  /** A list of edges (relational context) between RootQuery and connected Messenger Nodes */
  edges: Array<MessengerConnectionEdge>
  /** A list of connected Messenger Nodes */
  nodes: Array<Messenger>
  /** Information about pagination in a connection. */
  pageInfo: MessengerConnectionPageInfo
}

/** Edge between a Node and a connected Messenger */
export type MessengerConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Messenger Node */
  node: Messenger
}

/** Page Info on the connected MessengerConnectionEdge */
export type MessengerConnectionPageInfo = {
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
export type MessengerToPreviewConnectionEdge = Edge &
  MessengerConnectionEdge &
  OneToOneConnection & {
    __typename?: 'MessengerToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Messenger
  }

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** application/java mime type. */
  ApplicationJava = 'APPLICATION_JAVA',
  /** application/msword mime type. */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** application/octet-stream mime type. */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** application/onenote mime type. */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** application/oxps mime type. */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** application/pdf mime type. */
  ApplicationPdf = 'APPLICATION_PDF',
  /** application/rar mime type. */
  ApplicationRar = 'APPLICATION_RAR',
  /** application/rtf mime type. */
  ApplicationRtf = 'APPLICATION_RTF',
  /** application/ttaf+xml mime type. */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** application/vnd.apple.keynote mime type. */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** application/vnd.apple.numbers mime type. */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** application/vnd.apple.pages mime type. */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** application/vnd.ms-access mime type. */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** application/vnd.ms-excel mime type. */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** application/vnd.ms-excel.addin.macroEnabled.12 mime type. */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.binary.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** application/vnd.ms-excel.template.macroEnabled.12 mime type. */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint mime type. */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** application/vnd.ms-powerpoint.addin.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.presentation.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slideshow.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slide.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.template.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-project mime type. */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** application/vnd.ms-word.document.macroEnabled.12 mime type. */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** application/vnd.ms-word.template.macroEnabled.12 mime type. */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-write mime type. */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** application/vnd.ms-xpsdocument mime type. */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** application/vnd.oasis.opendocument.chart mime type. */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** application/vnd.oasis.opendocument.database mime type. */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** application/vnd.oasis.opendocument.formula mime type. */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** application/vnd.oasis.opendocument.graphics mime type. */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** application/vnd.oasis.opendocument.presentation mime type. */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** application/vnd.oasis.opendocument.spreadsheet mime type. */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** application/vnd.oasis.opendocument.text mime type. */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** application/vnd.openxmlformats-officedocument.presentationml.presentation mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** application/vnd.openxmlformats-officedocument.presentationml.slide mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** application/vnd.openxmlformats-officedocument.presentationml.slideshow mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** application/vnd.openxmlformats-officedocument.presentationml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.sheet mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.document mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** application/wordperfect mime type. */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** application/x-7z-compressed mime type. */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** application/x-gzip mime type. */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** application/x-tar mime type. */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** application/zip mime type. */
  ApplicationZip = 'APPLICATION_ZIP',
  /** audio/aac mime type. */
  AudioAac = 'AUDIO_AAC',
  /** audio/flac mime type. */
  AudioFlac = 'AUDIO_FLAC',
  /** audio/midi mime type. */
  AudioMidi = 'AUDIO_MIDI',
  /** audio/mpeg mime type. */
  AudioMpeg = 'AUDIO_MPEG',
  /** audio/ogg mime type. */
  AudioOgg = 'AUDIO_OGG',
  /** audio/wav mime type. */
  AudioWav = 'AUDIO_WAV',
  /** audio/x-matroska mime type. */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** audio/x-ms-wax mime type. */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** audio/x-ms-wma mime type. */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** audio/x-realaudio mime type. */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** image/avif mime type. */
  ImageAvif = 'IMAGE_AVIF',
  /** image/bmp mime type. */
  ImageBmp = 'IMAGE_BMP',
  /** image/gif mime type. */
  ImageGif = 'IMAGE_GIF',
  /** image/heic mime type. */
  ImageHeic = 'IMAGE_HEIC',
  /** image/jpeg mime type. */
  ImageJpeg = 'IMAGE_JPEG',
  /** image/png mime type. */
  ImagePng = 'IMAGE_PNG',
  /** image/svg+xml mime type. */
  ImageSvgXml = 'IMAGE_SVG_XML',
  /** image/tiff mime type. */
  ImageTiff = 'IMAGE_TIFF',
  /** image/webp mime type. */
  ImageWebp = 'IMAGE_WEBP',
  /** image/x-icon mime type. */
  ImageXIcon = 'IMAGE_X_ICON',
  /** text/calendar mime type. */
  TextCalendar = 'TEXT_CALENDAR',
  /** text/css mime type. */
  TextCss = 'TEXT_CSS',
  /** text/csv mime type. */
  TextCsv = 'TEXT_CSV',
  /** text/plain mime type. */
  TextPlain = 'TEXT_PLAIN',
  /** text/richtext mime type. */
  TextRichtext = 'TEXT_RICHTEXT',
  /** text/tab-separated-values mime type. */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** text/vtt mime type. */
  TextVtt = 'TEXT_VTT',
  /** video/3gpp mime type. */
  Video_3Gpp = 'VIDEO_3GPP',
  /** video/3gpp2 mime type. */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** video/avi mime type. */
  VideoAvi = 'VIDEO_AVI',
  /** video/divx mime type. */
  VideoDivx = 'VIDEO_DIVX',
  /** video/mp4 mime type. */
  VideoMp4 = 'VIDEO_MP4',
  /** video/mpeg mime type. */
  VideoMpeg = 'VIDEO_MPEG',
  /** video/ogg mime type. */
  VideoOgg = 'VIDEO_OGG',
  /** video/quicktime mime type. */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** video/webm mime type. */
  VideoWebm = 'VIDEO_WEBM',
  /** video/x-flv mime type. */
  VideoXFlv = 'VIDEO_X_FLV',
  /** video/x-matroska mime type. */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** video/x-ms-asf mime type. */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** video/x-ms-wm mime type. */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** video/x-ms-wmv mime type. */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** video/x-ms-wmx mime type. */
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
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContentAddons & {
    __typename?: 'NavigationItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Fields of the ContentAddons ACF Field Group */
    contentAddons?: Maybe<ContentAddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the navigation object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the navigation object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the navigation object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the NavigationItem type and the NavigationItem type */
    preview?: Maybe<NavigationItemToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
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
export type NavigationItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The NavigationItem type */
export type NavigationItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to NavigationItem Nodes */
export type NavigationItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected NavigationItem Nodes */
  edges: Array<NavigationItemConnectionEdge>
  /** A list of connected NavigationItem Nodes */
  nodes: Array<NavigationItem>
  /** Information about pagination in a connection. */
  pageInfo: NavigationItemConnectionPageInfo
}

/** Edge between a Node and a connected NavigationItem */
export type NavigationItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected NavigationItem Node */
  node: NavigationItem
}

/** Page Info on the connected NavigationItemConnectionEdge */
export type NavigationItemConnectionPageInfo = {
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
export type NavigationItemToPreviewConnectionEdge = Edge &
  NavigationItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'NavigationItemToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: NavigationItem
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
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'NodeWithAuthorToUserConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: User
  }

/** A node that can have comments associated with it */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']['output']>
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']['output']>
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
}

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: MediaItem
  }

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']['output']>
}

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']['output']>
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
}

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ContentNode
  }

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>
}

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** The Yoast SEO data of the ContentNode */
  seo?: Maybe<PostTypeSeo>
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>
}

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']['output']>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']['output']>>>
}

/** The NotFound type */
export type NotFound = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'NotFound'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the not-found object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the not-found object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    notFoundId: Scalars['Int']['output']
    /** The password for the not-found object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the NotFound type and the NotFound type */
    preview?: Maybe<NotFoundToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']['output']>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The NotFound type */
export type NotFoundContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The NotFound type */
export type NotFoundEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The NotFound type */
export type NotFoundEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The NotFound type */
export type NotFoundTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** Connection to NotFound Nodes */
export type NotFoundConnection = {
  /** A list of edges (relational context) between RootQuery and connected NotFound Nodes */
  edges: Array<NotFoundConnectionEdge>
  /** A list of connected NotFound Nodes */
  nodes: Array<NotFound>
  /** Information about pagination in a connection. */
  pageInfo: NotFoundConnectionPageInfo
}

/** Edge between a Node and a connected NotFound */
export type NotFoundConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected NotFound Node */
  node: NotFound
}

/** Page Info on the connected NotFoundConnectionEdge */
export type NotFoundConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum NotFoundIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the NotFound type and the NotFound type */
export type NotFoundToPreviewConnectionEdge = Edge &
  NotFoundConnectionEdge &
  OneToOneConnection & {
    __typename?: 'NotFoundToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: NotFound
  }

/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export type OneToOneConnection = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected node */
  node: Node
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
  HierarchicalNode &
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
  Previewable &
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
    /** Connection between the Page type and the Comment type */
    comments?: Maybe<PageToCommentConnection>
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the page object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the page object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
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
    /** The password for the page object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the Page type and the page type */
    preview?: Maybe<PageToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
    /** Connection between the Page type and the page type */
    revisions?: Maybe<PageToRevisionConnection>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>
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
export type PageTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The page type */
export type PageTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to page Nodes */
export type PageConnection = {
  /** A list of edges (relational context) between RootQuery and connected page Nodes */
  edges: Array<PageConnectionEdge>
  /** A list of connected page Nodes */
  nodes: Array<Page>
  /** Information about pagination in a connection. */
  pageInfo: PageConnectionPageInfo
}

/** Edge between a Node and a connected page */
export type PageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected page Node */
  node: Page
}

/** Page Info on the connected PageConnectionEdge */
export type PageConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Connection between the Page type and the Comment type */
export type PageToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'PageToCommentConnection'
    /** Edges for the PageToCommentConnection connection */
    edges: Array<PageToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: PageToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type PageToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'PageToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;PageToCommentConnection&quot; */
export type PageToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PageToCommentConnectionPageInfo'
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
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
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

/** Connection between the Page type and the page type */
export type PageToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  PageConnectionEdge & {
    __typename?: 'PageToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Page
  }

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection &
  PageConnection & {
    __typename?: 'PageToRevisionConnection'
    /** Edges for the PageToRevisionConnection connection */
    edges: Array<PageToRevisionConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>
    /** Information about pagination in a connection. */
    pageInfo: PageToRevisionConnectionPageInfo
  }

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'PageToRevisionConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Page
  }

/** Page Info on the &quot;PageToRevisionConnection&quot; */
export type PageToRevisionConnectionPageInfo = PageConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PageToRevisionConnectionPageInfo'
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

/** Arguments for filtering the PageToRevisionConnection connection */
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection to Plugin Nodes */
export type PluginConnection = {
  /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
  edges: Array<PluginConnectionEdge>
  /** A list of connected Plugin Nodes */
  nodes: Array<Plugin>
  /** Information about pagination in a connection. */
  pageInfo: PluginConnectionPageInfo
}

/** Edge between a Node and a connected Plugin */
export type PluginConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Plugin Node */
  node: Plugin
}

/** Page Info on the connected PluginConnectionEdge */
export type PluginConnectionPageInfo = {
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

/** The status of the WordPress plugin. */
export enum PluginStatusEnum {
  /** The plugin is currently active. */
  Active = 'ACTIVE',
  /** The plugin is a drop-in plugin. */
  DropIn = 'DROP_IN',
  /** The plugin is currently inactive. */
  Inactive = 'INACTIVE',
  /** The plugin is a must-use plugin. */
  MustUse = 'MUST_USE',
  /** The plugin is technically active but was paused while loading. */
  Paused = 'PAUSED',
  /** The plugin was active recently. */
  RecentlyActive = 'RECENTLY_ACTIVE',
  /** The plugin has an upgrade available. */
  Upgrade = 'UPGRADE',
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
  Previewable &
  UniformResourceIdentifiable &
  WithAcfRecords & {
    __typename?: 'Post'
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']['output']>
    /** Connection between the Post type and the category type */
    categories?: Maybe<PostToCategoryConnection>
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<Scalars['Int']['output']>
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars['String']['output']>
    /** Connection between the Post type and the Comment type */
    comments?: Maybe<PostToCommentConnection>
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the post object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the post object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the post object. */
    password?: Maybe<Scalars['String']['output']>
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: Maybe<Scalars['String']['output']>
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    /** Connection between the Post type and the postFormat type */
    postFormats?: Maybe<PostToPostFormatConnection>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    postId: Scalars['Int']['output']
    /** Connection between the Post type and the post type */
    preview?: Maybe<PostToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** Fields of the Records ACF Field Group */
    records?: Maybe<Records>
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>
    /** Connection between the Post type and the post type */
    revisions?: Maybe<PostToRevisionConnection>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** Connection between the Post type and the tag type */
    tags?: Maybe<PostToTagConnection>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
    /** Connection between the Post type and the TermNode type */
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

/** Connection to post Nodes */
export type PostConnection = {
  /** A list of edges (relational context) between RootQuery and connected post Nodes */
  edges: Array<PostConnectionEdge>
  /** A list of connected post Nodes */
  nodes: Array<Post>
  /** Information about pagination in a connection. */
  pageInfo: PostConnectionPageInfo
}

/** Edge between a Node and a connected post */
export type PostConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected post Node */
  node: Post
}

/** Page Info on the connected PostConnectionEdge */
export type PostConnectionPageInfo = {
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

/** The postFormat type */
export type PostFormat = DatabaseIdentifier &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'PostFormat'
    /** Connection between the PostFormat type and the ContentNode type */
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
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** Connection between the PostFormat type and the post type */
    posts?: Maybe<PostFormatToPostConnection>
    /** The Yoast SEO data of the Форматы taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the PostFormat type and the Taxonomy type */
    taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
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

/** Connection to postFormat Nodes */
export type PostFormatConnection = {
  /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
  edges: Array<PostFormatConnectionEdge>
  /** A list of connected postFormat Nodes */
  nodes: Array<PostFormat>
  /** Information about pagination in a connection. */
  pageInfo: PostFormatConnectionPageInfo
}

/** Edge between a Node and a connected postFormat */
export type PostFormatConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected postFormat Node */
  node: PostFormat
}

/** Page Info on the connected PostFormatConnectionEdge */
export type PostFormatConnectionPageInfo = {
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

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'PostFormatToContentNodeConnection'
    /** Edges for the PostFormatToContentNodeConnection connection */
    edges: Array<PostFormatToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: PostFormatToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'PostFormatToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export type PostFormatToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PostFormatToContentNodeConnectionPageInfo'
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

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection &
  PostConnection & {
    __typename?: 'PostFormatToPostConnection'
    /** Edges for the PostFormatToPostConnection connection */
    edges: Array<PostFormatToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: PostFormatToPostConnectionPageInfo
  }

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'PostFormatToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export type PostFormatToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostFormatToPostConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'PostFormatToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
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
  /** Provide the field value directly from database. Null on unauthenticated requests. */
  Raw = 'RAW',
  /** Provide the field value as rendered by WordPress. Default. */
  Rendered = 'RENDERED',
}

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

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'PostToCategoryConnection'
    /** Edges for the PostToCategoryConnection connection */
    edges: Array<PostToCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>
    /** Information about pagination in a connection. */
    pageInfo: PostToCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'PostToCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary category */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: Category
  }

/** Page Info on the &quot;PostToCategoryConnection&quot; */
export type PostToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PostToCategoryConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Post type and the Comment type */
export type PostToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'PostToCommentConnection'
    /** Edges for the PostToCommentConnection connection */
    edges: Array<PostToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: PostToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type PostToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'PostToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;PostToCommentConnection&quot; */
export type PostToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'PostToCommentConnectionPageInfo'
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
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
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

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection &
  PostFormatConnection & {
    __typename?: 'PostToPostFormatConnection'
    /** Edges for the PostToPostFormatConnection connection */
    edges: Array<PostToPostFormatConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<PostFormat>
    /** Information about pagination in a connection. */
    pageInfo: PostToPostFormatConnectionPageInfo
  }

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge &
  PostFormatConnectionEdge & {
    __typename?: 'PostToPostFormatConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary post_format */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: PostFormat
  }

/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export type PostToPostFormatConnectionPageInfo = PageInfo &
  PostFormatConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostToPostFormatConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Post type and the post type */
export type PostToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  PostConnectionEdge & {
    __typename?: 'PostToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Post
  }

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection &
  PostConnection & {
    __typename?: 'PostToRevisionConnection'
    /** Edges for the PostToRevisionConnection connection */
    edges: Array<PostToRevisionConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: PostToRevisionConnectionPageInfo
  }

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'PostToRevisionConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;PostToRevisionConnection&quot; */
export type PostToRevisionConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostToRevisionConnectionPageInfo'
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

/** Arguments for filtering the PostToRevisionConnection connection */
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection &
  TagConnection & {
    __typename?: 'PostToTagConnection'
    /** Edges for the PostToTagConnection connection */
    edges: Array<PostToTagConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Tag>
    /** Information about pagination in a connection. */
    pageInfo: PostToTagConnectionPageInfo
  }

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge &
  TagConnectionEdge & {
    __typename?: 'PostToTagConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary post_tag */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: Tag
  }

/** Page Info on the &quot;PostToTagConnection&quot; */
export type PostToTagConnectionPageInfo = PageInfo &
  TagConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostToTagConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'PostToTermNodeConnection'
    /** Edges for the PostToTermNodeConnection connection */
    edges: Array<PostToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: PostToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'PostToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export type PostToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'PostToTermNodeConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
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

/** Nodes that can be seen in a preview (unpublished) state. */
export type Previewable = {
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']['output']>
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']['output']>
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
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContentAddons & {
    __typename?: 'PrivacyPolicyItem'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Fields of the ContentAddons ACF Field Group */
    contentAddons?: Maybe<ContentAddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the privacy_policy object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the privacy_policy object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the privacy_policy object. */
    password?: Maybe<Scalars['String']['output']>
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
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>
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
export type PrivacyPolicyItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The PrivacyPolicyItem type */
export type PrivacyPolicyItemTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to PrivacyPolicyItem Nodes */
export type PrivacyPolicyItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected PrivacyPolicyItem Nodes */
  edges: Array<PrivacyPolicyItemConnectionEdge>
  /** A list of connected PrivacyPolicyItem Nodes */
  nodes: Array<PrivacyPolicyItem>
  /** Information about pagination in a connection. */
  pageInfo: PrivacyPolicyItemConnectionPageInfo
}

/** Edge between a Node and a connected PrivacyPolicyItem */
export type PrivacyPolicyItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected PrivacyPolicyItem Node */
  node: PrivacyPolicyItem
}

/** Page Info on the connected PrivacyPolicyItemConnectionEdge */
export type PrivacyPolicyItemConnectionPageInfo = {
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
export type PrivacyPolicyItemToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  PrivacyPolicyItemConnectionEdge & {
    __typename?: 'PrivacyPolicyItemToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: PrivacyPolicyItem
  }

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings'
  /** ID страницы, на которой должны отображаться последние записи */
  pageForPosts?: Maybe<Scalars['Int']['output']>
  /** ID страницы, которая должна отображаться на главной странице */
  pageOnFront?: Maybe<Scalars['Int']['output']>
  /** Максимум страниц блога для показа. */
  postsPerPage?: Maybe<Scalars['Int']['output']>
  /** Что показать на главной странице */
  showOnFront?: Maybe<Scalars['String']['output']>
}

/** The &quot;Records&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Records = AcfFieldGroup &
  AcfFieldGroupFields &
  Records_Fields & {
    __typename?: 'Records'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Records&quot; Field Group */
    button?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;Records&quot; Field Group */
    html?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Records&quot; Field Group */
    link?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Records&quot; Field Group */
    reverse?: Maybe<Scalars['Boolean']['output']>
  }

/** Interface representing fields of the ACF &quot;Records&quot; Field Group */
export type Records_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Records&quot; Field Group */
  button?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;Records&quot; Field Group */
  html?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Records&quot; Field Group */
  link?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Records&quot; Field Group */
  reverse?: Maybe<Scalars['Boolean']['output']>
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
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Recruit'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the recruit object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the recruit object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the recruit object. */
    password?: Maybe<Scalars['String']['output']>
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
    /** Connection between the Recruit type and the recruitList type */
    recruitLists?: Maybe<RecruitToRecruitListConnection>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
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
export type RecruitRecruitListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RecruitToRecruitListConnectionWhereArgs>
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

/** Connection to Recruit Nodes */
export type RecruitConnection = {
  /** A list of edges (relational context) between RootQuery and connected Recruit Nodes */
  edges: Array<RecruitConnectionEdge>
  /** A list of connected Recruit Nodes */
  nodes: Array<Recruit>
  /** Information about pagination in a connection. */
  pageInfo: RecruitConnectionPageInfo
}

/** Edge between a Node and a connected Recruit */
export type RecruitConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Recruit Node */
  node: Recruit
}

/** Page Info on the connected RecruitConnectionEdge */
export type RecruitConnectionPageInfo = {
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

/** The recruitList type */
export type RecruitList = DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'RecruitList'
    /** Connection between the RecruitList type and the ContentNode type */
    contentNodes?: Maybe<RecruitListToContentNodeConnection>
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
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    recruitListId?: Maybe<Scalars['Int']['output']>
    /** Connection between the RecruitList type and the Recruit type */
    recruits?: Maybe<RecruitListToRecruitConnection>
    /** The Yoast SEO data of the Каталог рекрутов taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the RecruitList type and the Taxonomy type */
    taxonomy?: Maybe<RecruitListToTaxonomyConnectionEdge>
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<RecruitList>
    /** List all translated versions of this term */
    translations?: Maybe<Array<Maybe<RecruitList>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The recruitList type */
export type RecruitListContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RecruitListToContentNodeConnectionWhereArgs>
}

/** The recruitList type */
export type RecruitListEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The recruitList type */
export type RecruitListEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The recruitList type */
export type RecruitListRecruitsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RecruitListToRecruitConnectionWhereArgs>
}

/** The recruitList type */
export type RecruitListTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to recruitList Nodes */
export type RecruitListConnection = {
  /** A list of edges (relational context) between RootQuery and connected recruitList Nodes */
  edges: Array<RecruitListConnectionEdge>
  /** A list of connected recruitList Nodes */
  nodes: Array<RecruitList>
  /** Information about pagination in a connection. */
  pageInfo: RecruitListConnectionPageInfo
}

/** Edge between a Node and a connected recruitList */
export type RecruitListConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected recruitList Node */
  node: RecruitList
}

/** Page Info on the connected RecruitListConnectionEdge */
export type RecruitListConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum RecruitListIdType {
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

/** Connection between the RecruitList type and the ContentNode type */
export type RecruitListToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'RecruitListToContentNodeConnection'
    /** Edges for the RecruitListToContentNodeConnection connection */
    edges: Array<RecruitListToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: RecruitListToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type RecruitListToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'RecruitListToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;RecruitListToContentNodeConnection&quot; */
export type RecruitListToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RecruitListToContentNodeConnectionPageInfo'
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

/** Arguments for filtering the RecruitListToContentNodeConnection connection */
export type RecruitListToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfRecruitListEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RecruitList type and the Recruit type */
export type RecruitListToRecruitConnection = Connection &
  RecruitConnection & {
    __typename?: 'RecruitListToRecruitConnection'
    /** Edges for the RecruitListToRecruitConnection connection */
    edges: Array<RecruitListToRecruitConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Recruit>
    /** Information about pagination in a connection. */
    pageInfo: RecruitListToRecruitConnectionPageInfo
  }

/** An edge in a connection */
export type RecruitListToRecruitConnectionEdge = Edge &
  RecruitConnectionEdge & {
    __typename?: 'RecruitListToRecruitConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Recruit
  }

/** Page Info on the &quot;RecruitListToRecruitConnection&quot; */
export type RecruitListToRecruitConnectionPageInfo = PageInfo &
  RecruitConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RecruitListToRecruitConnectionPageInfo'
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

/** Arguments for filtering the RecruitListToRecruitConnection connection */
export type RecruitListToRecruitConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RecruitList type and the Taxonomy type */
export type RecruitListToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'RecruitListToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
  }

/** Set relationships between the Recruit to recruitLists */
export type RecruitRecruitListsInput = {
  /** If true, this will append the recruitList to existing related recruitLists. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<RecruitRecruitListsNodeInput>>>
}

/** List of recruitLists to connect the Recruit to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type RecruitRecruitListsNodeInput = {
  /** The description of the recruitList. This field is used to set a description of the recruitList if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the recruitList. If present, this will be used to connect to the Recruit. If no existing recruitList exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the recruitList. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the recruitList. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Recruit type and the Recruit type */
export type RecruitToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  RecruitConnectionEdge & {
    __typename?: 'RecruitToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Recruit
  }

/** Connection between the Recruit type and the recruitList type */
export type RecruitToRecruitListConnection = Connection &
  RecruitListConnection & {
    __typename?: 'RecruitToRecruitListConnection'
    /** Edges for the RecruitToRecruitListConnection connection */
    edges: Array<RecruitToRecruitListConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<RecruitList>
    /** Information about pagination in a connection. */
    pageInfo: RecruitToRecruitListConnectionPageInfo
  }

/** An edge in a connection */
export type RecruitToRecruitListConnectionEdge = Edge &
  RecruitListConnectionEdge & {
    __typename?: 'RecruitToRecruitListConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary recruit_list */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: RecruitList
  }

/** Page Info on the &quot;RecruitToRecruitListConnection&quot; */
export type RecruitToRecruitListConnectionPageInfo = PageInfo &
  RecruitListConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RecruitToRecruitListConnectionPageInfo'
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

/** Arguments for filtering the RecruitToRecruitListConnection connection */
export type RecruitToRecruitListConnectionWhereArgs = {
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Recruit type and the TermNode type */
export type RecruitToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'RecruitToTermNodeConnection'
    /** Edges for the RecruitToTermNodeConnection connection */
    edges: Array<RecruitToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: RecruitToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type RecruitToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'RecruitToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;RecruitToTermNodeConnection&quot; */
export type RecruitToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RecruitToTermNodeConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Input for the registerUser mutation. */
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

/** The payload for the registerUser mutation. */
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

/** Input for the resetUserPassword mutation. */
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

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The User object mutation type. */
  user?: Maybe<User>
}

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The ID of the comment to be restored */
  id: Scalars['ID']['input']
}

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The restored comment object */
  comment?: Maybe<Comment>
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']['output']>
}

/** The review type */
export type Review = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithPageAttributes &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable &
  WithAcfCustomerReview & {
    __typename?: 'Review'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
    /** Fields of the CustomerReview ACF Field Group */
    customerReview?: Maybe<CustomerReview>
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
    /** Whether the review object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the review object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the review object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the Review type and the review type */
    preview?: Maybe<ReviewToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    reviewId: Scalars['Int']['output']
    /** Connection between the Review type and the reviewList type */
    reviewLists?: Maybe<ReviewToReviewListConnection>
    /** The Yoast SEO data of the ContentNode */
    seo?: Maybe<PostTypeSeo>
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']['output']>
    /** The current status of the object */
    status?: Maybe<Scalars['String']['output']>
    /** The template assigned to the node */
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

/** The review type */
export type ReviewContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The review type */
export type ReviewEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The review type */
export type ReviewEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The review type */
export type ReviewReviewListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewToReviewListConnectionWhereArgs>
}

/** The review type */
export type ReviewTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewToTermNodeConnectionWhereArgs>
}

/** The review type */
export type ReviewTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>
}

/** The review type */
export type ReviewTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to review Nodes */
export type ReviewConnection = {
  /** A list of edges (relational context) between RootQuery and connected review Nodes */
  edges: Array<ReviewConnectionEdge>
  /** A list of connected review Nodes */
  nodes: Array<Review>
  /** Information about pagination in a connection. */
  pageInfo: ReviewConnectionPageInfo
}

/** Edge between a Node and a connected review */
export type ReviewConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected review Node */
  node: Review
}

/** Page Info on the connected ReviewConnectionEdge */
export type ReviewConnectionPageInfo = {
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

/** The reviewList type */
export type ReviewList = DatabaseIdentifier &
  HierarchicalNode &
  HierarchicalTermNode &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'ReviewList'
    /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<ReviewListToAncestorsReviewListConnection>
    /** Connection between the reviewList type and its children reviewLists. */
    children?: Maybe<ReviewListToReviewListConnection>
    /** Connection between the ReviewList type and the ContentNode type */
    contentNodes?: Maybe<ReviewListToContentNodeConnection>
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
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** Connection between the reviewList type and its parent reviewList. */
    parent?: Maybe<ReviewListToParentReviewListConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    reviewListId?: Maybe<Scalars['Int']['output']>
    /** Connection between the ReviewList type and the review type */
    reviews?: Maybe<ReviewListToReviewConnection>
    /** The Yoast SEO data of the Категории отзывов taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']['output']>
    /** Connection between the ReviewList type and the Taxonomy type */
    taxonomy?: Maybe<ReviewListToTaxonomyConnectionEdge>
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']['output']>
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']['output']>
    /** Get specific translation version of this object */
    translation?: Maybe<ReviewList>
    /** List all translated versions of this term */
    translations?: Maybe<Array<Maybe<ReviewList>>>
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']['output']>
  }

/** The reviewList type */
export type ReviewListAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The reviewList type */
export type ReviewListChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewListToReviewListConnectionWhereArgs>
}

/** The reviewList type */
export type ReviewListContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewListToContentNodeConnectionWhereArgs>
}

/** The reviewList type */
export type ReviewListEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The reviewList type */
export type ReviewListEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** The reviewList type */
export type ReviewListReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewListToReviewConnectionWhereArgs>
}

/** The reviewList type */
export type ReviewListTranslationArgs = {
  language: LanguageCodeEnum
}

/** Connection to reviewList Nodes */
export type ReviewListConnection = {
  /** A list of edges (relational context) between RootQuery and connected reviewList Nodes */
  edges: Array<ReviewListConnectionEdge>
  /** A list of connected reviewList Nodes */
  nodes: Array<ReviewList>
  /** Information about pagination in a connection. */
  pageInfo: ReviewListConnectionPageInfo
}

/** Edge between a Node and a connected reviewList */
export type ReviewListConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected reviewList Node */
  node: ReviewList
}

/** Page Info on the connected ReviewListConnectionEdge */
export type ReviewListConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ReviewListIdType {
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

/** Connection between the ReviewList type and the reviewList type */
export type ReviewListToAncestorsReviewListConnection = Connection &
  ReviewListConnection & {
    __typename?: 'ReviewListToAncestorsReviewListConnection'
    /** Edges for the ReviewListToAncestorsReviewListConnection connection */
    edges: Array<ReviewListToAncestorsReviewListConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ReviewList>
    /** Information about pagination in a connection. */
    pageInfo: ReviewListToAncestorsReviewListConnectionPageInfo
  }

/** An edge in a connection */
export type ReviewListToAncestorsReviewListConnectionEdge = Edge &
  ReviewListConnectionEdge & {
    __typename?: 'ReviewListToAncestorsReviewListConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ReviewList
  }

/** Page Info on the &quot;ReviewListToAncestorsReviewListConnection&quot; */
export type ReviewListToAncestorsReviewListConnectionPageInfo = PageInfo &
  ReviewListConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'ReviewListToAncestorsReviewListConnectionPageInfo'
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

/** Connection between the ReviewList type and the ContentNode type */
export type ReviewListToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'ReviewListToContentNodeConnection'
    /** Edges for the ReviewListToContentNodeConnection connection */
    edges: Array<ReviewListToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: ReviewListToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type ReviewListToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'ReviewListToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;ReviewListToContentNodeConnection&quot; */
export type ReviewListToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'ReviewListToContentNodeConnectionPageInfo'
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

/** Arguments for filtering the ReviewListToContentNodeConnection connection */
export type ReviewListToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfReviewListEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the ReviewList type and the reviewList type */
export type ReviewListToParentReviewListConnectionEdge = Edge &
  OneToOneConnection &
  ReviewListConnectionEdge & {
    __typename?: 'ReviewListToParentReviewListConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: ReviewList
  }

/** Connection between the ReviewList type and the review type */
export type ReviewListToReviewConnection = Connection &
  ReviewConnection & {
    __typename?: 'ReviewListToReviewConnection'
    /** Edges for the ReviewListToReviewConnection connection */
    edges: Array<ReviewListToReviewConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Review>
    /** Information about pagination in a connection. */
    pageInfo: ReviewListToReviewConnectionPageInfo
  }

/** An edge in a connection */
export type ReviewListToReviewConnectionEdge = Edge &
  ReviewConnectionEdge & {
    __typename?: 'ReviewListToReviewConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Review
  }

/** Page Info on the &quot;ReviewListToReviewConnection&quot; */
export type ReviewListToReviewConnectionPageInfo = PageInfo &
  ReviewConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'ReviewListToReviewConnectionPageInfo'
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

/** Arguments for filtering the ReviewListToReviewConnection connection */
export type ReviewListToReviewConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the ReviewList type and the reviewList type */
export type ReviewListToReviewListConnection = Connection &
  ReviewListConnection & {
    __typename?: 'ReviewListToReviewListConnection'
    /** Edges for the ReviewListToReviewListConnection connection */
    edges: Array<ReviewListToReviewListConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ReviewList>
    /** Information about pagination in a connection. */
    pageInfo: ReviewListToReviewListConnectionPageInfo
  }

/** An edge in a connection */
export type ReviewListToReviewListConnectionEdge = Edge &
  ReviewListConnectionEdge & {
    __typename?: 'ReviewListToReviewListConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ReviewList
  }

/** Page Info on the &quot;ReviewListToReviewListConnection&quot; */
export type ReviewListToReviewListConnectionPageInfo = PageInfo &
  ReviewListConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'ReviewListToReviewListConnectionPageInfo'
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

/** Arguments for filtering the ReviewListToReviewListConnection connection */
export type ReviewListToReviewListConnectionWhereArgs = {
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the ReviewList type and the Taxonomy type */
export type ReviewListToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'ReviewListToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
  }

/** Set relationships between the review to reviewLists */
export type ReviewReviewListsInput = {
  /** If true, this will append the reviewList to existing related reviewLists. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<ReviewReviewListsNodeInput>>>
}

/** List of reviewLists to connect the review to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ReviewReviewListsNodeInput = {
  /** The description of the reviewList. This field is used to set a description of the reviewList if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the reviewList. If present, this will be used to connect to the review. If no existing reviewList exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>
  /** The name of the reviewList. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The slug of the reviewList. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Review type and the review type */
export type ReviewToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  ReviewConnectionEdge & {
    __typename?: 'ReviewToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Review
  }

/** Connection between the Review type and the reviewList type */
export type ReviewToReviewListConnection = Connection &
  ReviewListConnection & {
    __typename?: 'ReviewToReviewListConnection'
    /** Edges for the ReviewToReviewListConnection connection */
    edges: Array<ReviewToReviewListConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ReviewList>
    /** Information about pagination in a connection. */
    pageInfo: ReviewToReviewListConnectionPageInfo
  }

/** An edge in a connection */
export type ReviewToReviewListConnectionEdge = Edge &
  ReviewListConnectionEdge & {
    __typename?: 'ReviewToReviewListConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary review_list */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: ReviewList
  }

/** Page Info on the &quot;ReviewToReviewListConnection&quot; */
export type ReviewToReviewListConnectionPageInfo = PageInfo &
  ReviewListConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'ReviewToReviewListConnectionPageInfo'
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

/** Arguments for filtering the ReviewToReviewListConnection connection */
export type ReviewToReviewListConnectionWhereArgs = {
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Review type and the TermNode type */
export type ReviewToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'ReviewToTermNodeConnection'
    /** Edges for the ReviewToTermNodeConnection connection */
    edges: Array<ReviewToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: ReviewToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type ReviewToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'ReviewToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;ReviewToTermNodeConnection&quot; */
export type ReviewToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'ReviewToTermNodeConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** The &quot;Reviews&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Reviews = AcfFieldGroup &
  AcfFieldGroupFields &
  Reviews_Fields & {
    __typename?: 'Reviews'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Reviews&quot; Field Group */
    review?: Maybe<Array<Maybe<ReviewsReview>>>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Reviews&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** The &quot;ReviewsReview&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ReviewsReview = AcfFieldGroup &
  AcfFieldGroupFields &
  ReviewsReview_Fields & {
    __typename?: 'ReviewsReview'
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ReviewsReview&quot; Field Group */
    cta?: Maybe<Scalars['String']['output']>
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ReviewsReview&quot; Field Group */
    subtitle?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ReviewsReview&quot; Field Group */
    text?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ReviewsReview&quot; Field Group */
    title?: Maybe<Scalars['String']['output']>
  }

/** Interface representing fields of the ACF &quot;ReviewsReview&quot; Field Group */
export type ReviewsReview_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ReviewsReview&quot; Field Group */
  cta?: Maybe<Scalars['String']['output']>
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ReviewsReview&quot; Field Group */
  subtitle?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ReviewsReview&quot; Field Group */
  text?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ReviewsReview&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** Interface representing fields of the ACF &quot;Reviews&quot; Field Group */
export type Reviews_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Reviews&quot; Field Group */
  review?: Maybe<Array<Maybe<ReviewsReview>>>
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Reviews&quot; Field Group */
  title?: Maybe<Scalars['String']['output']>
}

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation'
  /** The createAboutItem mutation */
  createAboutItem?: Maybe<CreateAboutItemPayload>
  /** The createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>
  /** The createComment mutation */
  createComment?: Maybe<CreateCommentPayload>
  /** The createCommonFragment mutation */
  createCommonFragment?: Maybe<CreateCommonFragmentPayload>
  /** The createConfidentialityPolicy mutation */
  createConfidentialityPolicy?: Maybe<CreateConfidentialityPolicyPayload>
  /** The createContact mutation */
  createContact?: Maybe<CreateContactPayload>
  /** The createContactItem mutation */
  createContactItem?: Maybe<CreateContactItemPayload>
  /** The createFeedbackItem mutation */
  createFeedbackItem?: Maybe<CreateFeedbackItemPayload>
  /** The createFooterItem mutation */
  createFooterItem?: Maybe<CreateFooterItemPayload>
  /** The createFragment mutation */
  createFragment?: Maybe<CreateFragmentPayload>
  /** The createHeroItem mutation */
  createHeroItem?: Maybe<CreateHeroItemPayload>
  /** The createMain mutation */
  createMain?: Maybe<CreateMainPayload>
  /** The createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>
  /** The createMessenger mutation */
  createMessenger?: Maybe<CreateMessengerPayload>
  /** The createNavigationItem mutation */
  createNavigationItem?: Maybe<CreateNavigationItemPayload>
  /** The createNotFound mutation */
  createNotFound?: Maybe<CreateNotFoundPayload>
  /** The createPage mutation */
  createPage?: Maybe<CreatePagePayload>
  /** The createPost mutation */
  createPost?: Maybe<CreatePostPayload>
  /** The createPostFormat mutation */
  createPostFormat?: Maybe<CreatePostFormatPayload>
  /** The createPrivacyPolicyItem mutation */
  createPrivacyPolicyItem?: Maybe<CreatePrivacyPolicyItemPayload>
  /** The createRecruit mutation */
  createRecruit?: Maybe<CreateRecruitPayload>
  /** The createRecruitList mutation */
  createRecruitList?: Maybe<CreateRecruitListPayload>
  /** The createReview mutation */
  createReview?: Maybe<CreateReviewPayload>
  /** The createReviewList mutation */
  createReviewList?: Maybe<CreateReviewListPayload>
  /** The createSkill mutation */
  createSkill?: Maybe<CreateSkillPayload>
  /** The createSkillCategory mutation */
  createSkillCategory?: Maybe<CreateSkillCategoryPayload>
  /** The createSocialNetwork mutation */
  createSocialNetwork?: Maybe<CreateSocialNetworkPayload>
  /** The createTag mutation */
  createTag?: Maybe<CreateTagPayload>
  /** The createUser mutation */
  createUser?: Maybe<CreateUserPayload>
  /** The deleteAboutItem mutation */
  deleteAboutItem?: Maybe<DeleteAboutItemPayload>
  /** The deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>
  /** The deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>
  /** The deleteCommonFragment mutation */
  deleteCommonFragment?: Maybe<DeleteCommonFragmentPayload>
  /** The deleteConfidentialityPolicy mutation */
  deleteConfidentialityPolicy?: Maybe<DeleteConfidentialityPolicyPayload>
  /** The deleteContact mutation */
  deleteContact?: Maybe<DeleteContactPayload>
  /** The deleteContactItem mutation */
  deleteContactItem?: Maybe<DeleteContactItemPayload>
  /** The deleteFeedbackItem mutation */
  deleteFeedbackItem?: Maybe<DeleteFeedbackItemPayload>
  /** The deleteFooterItem mutation */
  deleteFooterItem?: Maybe<DeleteFooterItemPayload>
  /** The deleteFragment mutation */
  deleteFragment?: Maybe<DeleteFragmentPayload>
  /** The deleteHeroItem mutation */
  deleteHeroItem?: Maybe<DeleteHeroItemPayload>
  /** The deleteMain mutation */
  deleteMain?: Maybe<DeleteMainPayload>
  /** The deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>
  /** The deleteMessenger mutation */
  deleteMessenger?: Maybe<DeleteMessengerPayload>
  /** The deleteNavigationItem mutation */
  deleteNavigationItem?: Maybe<DeleteNavigationItemPayload>
  /** The deleteNotFound mutation */
  deleteNotFound?: Maybe<DeleteNotFoundPayload>
  /** The deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>
  /** The deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>
  /** The deletePostFormat mutation */
  deletePostFormat?: Maybe<DeletePostFormatPayload>
  /** The deletePrivacyPolicyItem mutation */
  deletePrivacyPolicyItem?: Maybe<DeletePrivacyPolicyItemPayload>
  /** The deleteRecruit mutation */
  deleteRecruit?: Maybe<DeleteRecruitPayload>
  /** The deleteRecruitList mutation */
  deleteRecruitList?: Maybe<DeleteRecruitListPayload>
  /** The deleteReview mutation */
  deleteReview?: Maybe<DeleteReviewPayload>
  /** The deleteReviewList mutation */
  deleteReviewList?: Maybe<DeleteReviewListPayload>
  /** The deleteSkill mutation */
  deleteSkill?: Maybe<DeleteSkillPayload>
  /** The deleteSkillCategory mutation */
  deleteSkillCategory?: Maybe<DeleteSkillCategoryPayload>
  /** The deleteSocialNetwork mutation */
  deleteSocialNetwork?: Maybe<DeleteSocialNetworkPayload>
  /** The deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>
  /** The deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>
  /** Increase the count. */
  increaseCount?: Maybe<Scalars['Int']['output']>
  /** The registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>
  /** The resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>
  /** The restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>
  /** Send password reset email to user */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>
  /** The submitForm mutation */
  submitForm?: Maybe<SubmitFormPayload>
  /** The updateAboutItem mutation */
  updateAboutItem?: Maybe<UpdateAboutItemPayload>
  /** The updateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>
  /** The updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>
  /** The updateCommonFragment mutation */
  updateCommonFragment?: Maybe<UpdateCommonFragmentPayload>
  /** The updateConfidentialityPolicy mutation */
  updateConfidentialityPolicy?: Maybe<UpdateConfidentialityPolicyPayload>
  /** The updateContact mutation */
  updateContact?: Maybe<UpdateContactPayload>
  /** The updateContactItem mutation */
  updateContactItem?: Maybe<UpdateContactItemPayload>
  /** The updateFeedbackItem mutation */
  updateFeedbackItem?: Maybe<UpdateFeedbackItemPayload>
  /** The updateFooterItem mutation */
  updateFooterItem?: Maybe<UpdateFooterItemPayload>
  /** The updateFragment mutation */
  updateFragment?: Maybe<UpdateFragmentPayload>
  /** The updateHeroItem mutation */
  updateHeroItem?: Maybe<UpdateHeroItemPayload>
  /** The updateMain mutation */
  updateMain?: Maybe<UpdateMainPayload>
  /** The updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>
  /** The updateMessenger mutation */
  updateMessenger?: Maybe<UpdateMessengerPayload>
  /** The updateNavigationItem mutation */
  updateNavigationItem?: Maybe<UpdateNavigationItemPayload>
  /** The updateNotFound mutation */
  updateNotFound?: Maybe<UpdateNotFoundPayload>
  /** The updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>
  /** The updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>
  /** The updatePostFormat mutation */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>
  /** The updatePrivacyPolicyItem mutation */
  updatePrivacyPolicyItem?: Maybe<UpdatePrivacyPolicyItemPayload>
  /** The updateRecruit mutation */
  updateRecruit?: Maybe<UpdateRecruitPayload>
  /** The updateRecruitList mutation */
  updateRecruitList?: Maybe<UpdateRecruitListPayload>
  /** The updateReview mutation */
  updateReview?: Maybe<UpdateReviewPayload>
  /** The updateReviewList mutation */
  updateReviewList?: Maybe<UpdateReviewListPayload>
  /** The updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>
  /** The updateSkill mutation */
  updateSkill?: Maybe<UpdateSkillPayload>
  /** The updateSkillCategory mutation */
  updateSkillCategory?: Maybe<UpdateSkillCategoryPayload>
  /** The updateSocialNetwork mutation */
  updateSocialNetwork?: Maybe<UpdateSocialNetworkPayload>
  /** The updateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>
  /** The updateUser mutation */
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
export type RootMutationCreateCommonFragmentArgs = {
  input: CreateCommonFragmentInput
}

/** The root mutation */
export type RootMutationCreateConfidentialityPolicyArgs = {
  input: CreateConfidentialityPolicyInput
}

/** The root mutation */
export type RootMutationCreateContactArgs = {
  input: CreateContactInput
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
export type RootMutationCreateMainArgs = {
  input: CreateMainInput
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
export type RootMutationCreateNotFoundArgs = {
  input: CreateNotFoundInput
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
export type RootMutationCreateRecruitListArgs = {
  input: CreateRecruitListInput
}

/** The root mutation */
export type RootMutationCreateReviewArgs = {
  input: CreateReviewInput
}

/** The root mutation */
export type RootMutationCreateReviewListArgs = {
  input: CreateReviewListInput
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
export type RootMutationDeleteCommonFragmentArgs = {
  input: DeleteCommonFragmentInput
}

/** The root mutation */
export type RootMutationDeleteConfidentialityPolicyArgs = {
  input: DeleteConfidentialityPolicyInput
}

/** The root mutation */
export type RootMutationDeleteContactArgs = {
  input: DeleteContactInput
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
export type RootMutationDeleteMainArgs = {
  input: DeleteMainInput
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
export type RootMutationDeleteNotFoundArgs = {
  input: DeleteNotFoundInput
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
export type RootMutationDeleteRecruitListArgs = {
  input: DeleteRecruitListInput
}

/** The root mutation */
export type RootMutationDeleteReviewArgs = {
  input: DeleteReviewInput
}

/** The root mutation */
export type RootMutationDeleteReviewListArgs = {
  input: DeleteReviewListInput
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
export type RootMutationUpdateCommonFragmentArgs = {
  input: UpdateCommonFragmentInput
}

/** The root mutation */
export type RootMutationUpdateConfidentialityPolicyArgs = {
  input: UpdateConfidentialityPolicyInput
}

/** The root mutation */
export type RootMutationUpdateContactArgs = {
  input: UpdateContactInput
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
export type RootMutationUpdateMainArgs = {
  input: UpdateMainInput
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
export type RootMutationUpdateNotFoundArgs = {
  input: UpdateNotFoundInput
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
export type RootMutationUpdateRecruitListArgs = {
  input: UpdateRecruitListInput
}

/** The root mutation */
export type RootMutationUpdateReviewArgs = {
  input: UpdateReviewInput
}

/** The root mutation */
export type RootMutationUpdateReviewListArgs = {
  input: UpdateReviewListInput
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
  /** Connection between the RootQuery type and the confidentialityPolicy type */
  allConfidentialityPolicy?: Maybe<RootQueryToConfidentialityPolicyConnection>
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
  /** An object of the CommonFragment Type.  */
  commonFragment?: Maybe<CommonFragment>
  /**
   * A CommonFragment object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  commonFragmentBy?: Maybe<CommonFragment>
  /** Connection between the RootQuery type and the CommonFragment type */
  commonFragments?: Maybe<RootQueryToCommonFragmentConnection>
  /** An object of the confidentialityPolicy Type.  */
  confidentialityPolicy?: Maybe<ConfidentialityPolicy>
  /**
   * A confidentialityPolicy object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  confidentialityPolicyBy?: Maybe<ConfidentialityPolicy>
  /** An object of the Contact Type.  */
  contact?: Maybe<Contact>
  /**
   * A Contact object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  contactBy?: Maybe<Contact>
  /** An object of the ContactItem Type.  */
  contactItem?: Maybe<ContactItem>
  /**
   * A ContactItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  contactItemBy?: Maybe<ContactItem>
  /** Connection between the RootQuery type and the ContactItem type */
  contactItems?: Maybe<RootQueryToContactItemConnection>
  /** Connection between the RootQuery type and the Contact type */
  contacts?: Maybe<RootQueryToContactConnection>
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
  /** An object of the Main Type.  */
  main?: Maybe<Main>
  /**
   * A Main object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mainBy?: Maybe<Main>
  /** Connection between the RootQuery type and the Main type */
  mains?: Maybe<RootQueryToMainConnection>
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
  /** An object of the NotFound Type.  */
  notFound?: Maybe<NotFound>
  /**
   * A NotFound object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  notFoundBy?: Maybe<NotFound>
  /** Connection between the RootQuery type and the NotFound type */
  notFounds?: Maybe<RootQueryToNotFoundConnection>
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
  /** A 0bject */
  recruitList?: Maybe<RecruitList>
  /** Connection between the RootQuery type and the recruitList type */
  recruitLists?: Maybe<RootQueryToRecruitListConnection>
  /** Connection between the RootQuery type and the Recruit type */
  recruits?: Maybe<RootQueryToRecruitConnection>
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>
  /** An object of the review Type.  */
  review?: Maybe<Review>
  /**
   * A review object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  reviewBy?: Maybe<Review>
  /** A 0bject */
  reviewList?: Maybe<ReviewList>
  /** Connection between the RootQuery type and the reviewList type */
  reviewLists?: Maybe<RootQueryToReviewListConnection>
  /** Connection between the RootQuery type and the review type */
  reviews?: Maybe<RootQueryToReviewConnection>
  /** Connection between the RootQuery type and the ContentNode type */
  revisions?: Maybe<RootQueryToRevisionsConnection>
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
export type RootQueryAllConfidentialityPolicyArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToConfidentialityPolicyConnectionWhereArgs>
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
  idType?: InputMaybe<CommentNodeIdTypeEnum>
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
export type RootQueryCommonFragmentArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<CommonFragmentIdType>
}

/** The root entry point into the Graph */
export type RootQueryCommonFragmentByArgs = {
  commonFragmentId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryCommonFragmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToCommonFragmentConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryConfidentialityPolicyArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<ConfidentialityPolicyIdType>
}

/** The root entry point into the Graph */
export type RootQueryConfidentialityPolicyByArgs = {
  confidentialityPolicyId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryContactArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<ContactIdType>
}

/** The root entry point into the Graph */
export type RootQueryContactByArgs = {
  contactId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
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
export type RootQueryContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToContactConnectionWhereArgs>
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
export type RootQueryMainArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<MainIdType>
}

/** The root entry point into the Graph */
export type RootQueryMainByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  mainId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryMainsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToMainConnectionWhereArgs>
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
export type RootQueryNotFoundArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  idType?: InputMaybe<NotFoundIdType>
}

/** The root entry point into the Graph */
export type RootQueryNotFoundByArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  notFoundId?: InputMaybe<Scalars['Int']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
}

/** The root entry point into the Graph */
export type RootQueryNotFoundsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToNotFoundConnectionWhereArgs>
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
  where?: InputMaybe<RootQueryToPluginConnectionWhereArgs>
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
export type RootQueryRecruitListArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<RecruitListIdType>
}

/** The root entry point into the Graph */
export type RootQueryRecruitListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToRecruitListConnectionWhereArgs>
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
export type RootQueryReviewListArgs = {
  id: Scalars['ID']['input']
  idType?: InputMaybe<ReviewListIdType>
}

/** The root entry point into the Graph */
export type RootQueryReviewListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RootQueryToReviewListConnectionWhereArgs>
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
  where?: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>
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
export type RootQueryToAboutItemConnection = AboutItemConnection &
  Connection & {
    __typename?: 'RootQueryToAboutItemConnection'
    /** Edges for the RootQueryToAboutItemConnection connection */
    edges: Array<RootQueryToAboutItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<AboutItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToAboutItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToAboutItemConnectionEdge = AboutItemConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToAboutItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: AboutItem
  }

/** Page Info on the &quot;RootQueryToAboutItemConnection&quot; */
export type RootQueryToAboutItemConnectionPageInfo = AboutItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToAboutItemConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToAboutItemConnection connection */
export type RootQueryToAboutItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'RootQueryToCategoryConnection'
    /** Edges for the RootQueryToCategoryConnection connection */
    edges: Array<RootQueryToCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Category
  }

/** Page Info on the &quot;RootQueryToCategoryConnection&quot; */
export type RootQueryToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToCategoryConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'RootQueryToCommentConnection'
    /** Edges for the RootQueryToCommentConnection connection */
    edges: Array<RootQueryToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;RootQueryToCommentConnection&quot; */
export type RootQueryToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToCommentConnectionPageInfo'
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
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
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

/** Connection between the RootQuery type and the CommonFragment type */
export type RootQueryToCommonFragmentConnection = CommonFragmentConnection &
  Connection & {
    __typename?: 'RootQueryToCommonFragmentConnection'
    /** Edges for the RootQueryToCommonFragmentConnection connection */
    edges: Array<RootQueryToCommonFragmentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<CommonFragment>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToCommonFragmentConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToCommonFragmentConnectionEdge = CommonFragmentConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCommonFragmentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: CommonFragment
  }

/** Page Info on the &quot;RootQueryToCommonFragmentConnection&quot; */
export type RootQueryToCommonFragmentConnectionPageInfo = CommonFragmentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToCommonFragmentConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToCommonFragmentConnection connection */
export type RootQueryToCommonFragmentConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RootQuery type and the confidentialityPolicy type */
export type RootQueryToConfidentialityPolicyConnection = ConfidentialityPolicyConnection &
  Connection & {
    __typename?: 'RootQueryToConfidentialityPolicyConnection'
    /** Edges for the RootQueryToConfidentialityPolicyConnection connection */
    edges: Array<RootQueryToConfidentialityPolicyConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ConfidentialityPolicy>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToConfidentialityPolicyConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToConfidentialityPolicyConnectionEdge = ConfidentialityPolicyConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToConfidentialityPolicyConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ConfidentialityPolicy
  }

/** Page Info on the &quot;RootQueryToConfidentialityPolicyConnection&quot; */
export type RootQueryToConfidentialityPolicyConnectionPageInfo =
  ConfidentialityPolicyConnectionPageInfo &
    PageInfo &
    WpPageInfo & {
      __typename?: 'RootQueryToConfidentialityPolicyConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToConfidentialityPolicyConnection connection */
export type RootQueryToConfidentialityPolicyConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RootQuery type and the Contact type */
export type RootQueryToContactConnection = Connection &
  ContactConnection & {
    __typename?: 'RootQueryToContactConnection'
    /** Edges for the RootQueryToContactConnection connection */
    edges: Array<RootQueryToContactConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Contact>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToContactConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToContactConnectionEdge = ContactConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContactConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Contact
  }

/** Page Info on the &quot;RootQueryToContactConnection&quot; */
export type RootQueryToContactConnectionPageInfo = ContactConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToContactConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToContactConnection connection */
export type RootQueryToContactConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RootQuery type and the ContactItem type */
export type RootQueryToContactItemConnection = Connection &
  ContactItemConnection & {
    __typename?: 'RootQueryToContactItemConnection'
    /** Edges for the RootQueryToContactItemConnection connection */
    edges: Array<RootQueryToContactItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContactItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToContactItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToContactItemConnectionEdge = ContactItemConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContactItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContactItem
  }

/** Page Info on the &quot;RootQueryToContactItemConnection&quot; */
export type RootQueryToContactItemConnectionPageInfo = ContactItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToContactItemConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToContactItemConnection connection */
export type RootQueryToContactItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'RootQueryToContentNodeConnection'
    /** Edges for the RootQueryToContentNodeConnection connection */
    edges: Array<RootQueryToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */
export type RootQueryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToContentNodeConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToContentTypeConnection = Connection &
  ContentTypeConnection & {
    __typename?: 'RootQueryToContentTypeConnection'
    /** Edges for the RootQueryToContentTypeConnection connection */
    edges: Array<RootQueryToContentTypeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentType>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToContentTypeConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContentTypeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentType
  }

/** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */
export type RootQueryToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToContentTypeConnectionPageInfo'
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

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'RootQueryToEnqueuedScriptConnection'
    /** Edges for the RootQueryToEnqueuedScriptConnection connection */
    edges: Array<RootQueryToEnqueuedScriptConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'RootQueryToEnqueuedScriptConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedScript
  }

/** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */
export type RootQueryToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToEnqueuedScriptConnectionPageInfo'
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

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'RootQueryToEnqueuedStylesheetConnection'
    /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
    edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
  }

/** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */
export type RootQueryToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToEnqueuedStylesheetConnectionPageInfo'
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

/** Connection between the RootQuery type and the FeedbackItem type */
export type RootQueryToFeedbackItemConnection = Connection &
  FeedbackItemConnection & {
    __typename?: 'RootQueryToFeedbackItemConnection'
    /** Edges for the RootQueryToFeedbackItemConnection connection */
    edges: Array<RootQueryToFeedbackItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<FeedbackItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToFeedbackItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToFeedbackItemConnectionEdge = Edge &
  FeedbackItemConnectionEdge & {
    __typename?: 'RootQueryToFeedbackItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: FeedbackItem
  }

/** Page Info on the &quot;RootQueryToFeedbackItemConnection&quot; */
export type RootQueryToFeedbackItemConnectionPageInfo = FeedbackItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToFeedbackItemConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToFeedbackItemConnection connection */
export type RootQueryToFeedbackItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToFooterItemConnection = Connection &
  FooterItemConnection & {
    __typename?: 'RootQueryToFooterItemConnection'
    /** Edges for the RootQueryToFooterItemConnection connection */
    edges: Array<RootQueryToFooterItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<FooterItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToFooterItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToFooterItemConnectionEdge = Edge &
  FooterItemConnectionEdge & {
    __typename?: 'RootQueryToFooterItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: FooterItem
  }

/** Page Info on the &quot;RootQueryToFooterItemConnection&quot; */
export type RootQueryToFooterItemConnectionPageInfo = FooterItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToFooterItemConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToFooterItemConnection connection */
export type RootQueryToFooterItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToFormConnection = Connection &
  FormConnection & {
    __typename?: 'RootQueryToFormConnection'
    /** Edges for the RootQueryToFormConnection connection */
    edges: Array<RootQueryToFormConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Form>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToFormConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToFormConnectionEdge = Edge &
  FormConnectionEdge & {
    __typename?: 'RootQueryToFormConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Form
  }

/** Page Info on the &quot;RootQueryToFormConnection&quot; */
export type RootQueryToFormConnectionPageInfo = FormConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToFormConnectionPageInfo'
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

/** Connection between the RootQuery type and the Fragment type */
export type RootQueryToFragmentConnection = Connection &
  FragmentConnection & {
    __typename?: 'RootQueryToFragmentConnection'
    /** Edges for the RootQueryToFragmentConnection connection */
    edges: Array<RootQueryToFragmentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Fragment>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToFragmentConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToFragmentConnectionEdge = Edge &
  FragmentConnectionEdge & {
    __typename?: 'RootQueryToFragmentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Fragment
  }

/** Page Info on the &quot;RootQueryToFragmentConnection&quot; */
export type RootQueryToFragmentConnectionPageInfo = FragmentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToFragmentConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToFragmentConnection connection */
export type RootQueryToFragmentConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToHeroItemConnection = Connection &
  HeroItemConnection & {
    __typename?: 'RootQueryToHeroItemConnection'
    /** Edges for the RootQueryToHeroItemConnection connection */
    edges: Array<RootQueryToHeroItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<HeroItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToHeroItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToHeroItemConnectionEdge = Edge &
  HeroItemConnectionEdge & {
    __typename?: 'RootQueryToHeroItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: HeroItem
  }

/** Page Info on the &quot;RootQueryToHeroItemConnection&quot; */
export type RootQueryToHeroItemConnectionPageInfo = HeroItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToHeroItemConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToHeroItemConnection connection */
export type RootQueryToHeroItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RootQuery type and the Main type */
export type RootQueryToMainConnection = Connection &
  MainConnection & {
    __typename?: 'RootQueryToMainConnection'
    /** Edges for the RootQueryToMainConnection connection */
    edges: Array<RootQueryToMainConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Main>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMainConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToMainConnectionEdge = Edge &
  MainConnectionEdge & {
    __typename?: 'RootQueryToMainConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Main
  }

/** Page Info on the &quot;RootQueryToMainConnection&quot; */
export type RootQueryToMainConnectionPageInfo = MainConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToMainConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToMainConnection connection */
export type RootQueryToMainConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToMediaItemConnection = Connection &
  MediaItemConnection & {
    __typename?: 'RootQueryToMediaItemConnection'
    /** Edges for the RootQueryToMediaItemConnection connection */
    edges: Array<RootQueryToMediaItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMediaItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'RootQueryToMediaItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MediaItem
  }

/** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */
export type RootQueryToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToMediaItemConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToMenuConnection = Connection &
  MenuConnection & {
    __typename?: 'RootQueryToMenuConnection'
    /** Edges for the RootQueryToMenuConnection connection */
    edges: Array<RootQueryToMenuConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Menu>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMenuConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge &
  MenuConnectionEdge & {
    __typename?: 'RootQueryToMenuConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Menu
  }

/** Page Info on the &quot;RootQueryToMenuConnection&quot; */
export type RootQueryToMenuConnectionPageInfo = MenuConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToMenuConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>
  /** The slug of the menu to query items for */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'RootQueryToMenuItemConnection'
    /** Edges for the RootQueryToMenuItemConnection connection */
    edges: Array<RootQueryToMenuItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMenuItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'RootQueryToMenuItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MenuItem
  }

/** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */
export type RootQueryToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToMenuItemConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
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
export type RootQueryToMessengerConnection = Connection &
  MessengerConnection & {
    __typename?: 'RootQueryToMessengerConnection'
    /** Edges for the RootQueryToMessengerConnection connection */
    edges: Array<RootQueryToMessengerConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Messenger>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMessengerConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToMessengerConnectionEdge = Edge &
  MessengerConnectionEdge & {
    __typename?: 'RootQueryToMessengerConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Messenger
  }

/** Page Info on the &quot;RootQueryToMessengerConnection&quot; */
export type RootQueryToMessengerConnectionPageInfo = MessengerConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToMessengerConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToMessengerConnection connection */
export type RootQueryToMessengerConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToNavigationItemConnection = Connection &
  NavigationItemConnection & {
    __typename?: 'RootQueryToNavigationItemConnection'
    /** Edges for the RootQueryToNavigationItemConnection connection */
    edges: Array<RootQueryToNavigationItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<NavigationItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToNavigationItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToNavigationItemConnectionEdge = Edge &
  NavigationItemConnectionEdge & {
    __typename?: 'RootQueryToNavigationItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: NavigationItem
  }

/** Page Info on the &quot;RootQueryToNavigationItemConnection&quot; */
export type RootQueryToNavigationItemConnectionPageInfo = NavigationItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToNavigationItemConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToNavigationItemConnection connection */
export type RootQueryToNavigationItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RootQuery type and the NotFound type */
export type RootQueryToNotFoundConnection = Connection &
  NotFoundConnection & {
    __typename?: 'RootQueryToNotFoundConnection'
    /** Edges for the RootQueryToNotFoundConnection connection */
    edges: Array<RootQueryToNotFoundConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<NotFound>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToNotFoundConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToNotFoundConnectionEdge = Edge &
  NotFoundConnectionEdge & {
    __typename?: 'RootQueryToNotFoundConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: NotFound
  }

/** Page Info on the &quot;RootQueryToNotFoundConnection&quot; */
export type RootQueryToNotFoundConnectionPageInfo = NotFoundConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToNotFoundConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToNotFoundConnection connection */
export type RootQueryToNotFoundConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToPageConnection = Connection &
  PageConnection & {
    __typename?: 'RootQueryToPageConnection'
    /** Edges for the RootQueryToPageConnection connection */
    edges: Array<RootQueryToPageConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPageConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'RootQueryToPageConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Page
  }

/** Page Info on the &quot;RootQueryToPageConnection&quot; */
export type RootQueryToPageConnectionPageInfo = PageConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPageConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToPluginConnection = Connection &
  PluginConnection & {
    __typename?: 'RootQueryToPluginConnection'
    /** Edges for the RootQueryToPluginConnection connection */
    edges: Array<RootQueryToPluginConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Plugin>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPluginConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge &
  PluginConnectionEdge & {
    __typename?: 'RootQueryToPluginConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Plugin
  }

/** Page Info on the &quot;RootQueryToPluginConnection&quot; */
export type RootQueryToPluginConnectionPageInfo = PageInfo &
  PluginConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPluginConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Retrieve plugins where plugin status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>
  /** Show plugins with a specific status. */
  status?: InputMaybe<PluginStatusEnum>
}

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection &
  PostConnection & {
    __typename?: 'RootQueryToPostConnection'
    /** Edges for the RootQueryToPostConnection connection */
    edges: Array<RootQueryToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPostConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'RootQueryToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;RootQueryToPostConnection&quot; */
export type RootQueryToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPostConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection &
  PostFormatConnection & {
    __typename?: 'RootQueryToPostFormatConnection'
    /** Edges for the RootQueryToPostFormatConnection connection */
    edges: Array<RootQueryToPostFormatConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<PostFormat>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPostFormatConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge &
  PostFormatConnectionEdge & {
    __typename?: 'RootQueryToPostFormatConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: PostFormat
  }

/** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */
export type RootQueryToPostFormatConnectionPageInfo = PageInfo &
  PostFormatConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPostFormatConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the PrivacyPolicyItem type */
export type RootQueryToPrivacyPolicyItemConnection = Connection &
  PrivacyPolicyItemConnection & {
    __typename?: 'RootQueryToPrivacyPolicyItemConnection'
    /** Edges for the RootQueryToPrivacyPolicyItemConnection connection */
    edges: Array<RootQueryToPrivacyPolicyItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<PrivacyPolicyItem>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPrivacyPolicyItemConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToPrivacyPolicyItemConnectionEdge = Edge &
  PrivacyPolicyItemConnectionEdge & {
    __typename?: 'RootQueryToPrivacyPolicyItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: PrivacyPolicyItem
  }

/** Page Info on the &quot;RootQueryToPrivacyPolicyItemConnection&quot; */
export type RootQueryToPrivacyPolicyItemConnectionPageInfo = PageInfo &
  PrivacyPolicyItemConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToPrivacyPolicyItemConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToPrivacyPolicyItemConnection connection */
export type RootQueryToPrivacyPolicyItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToRecruitConnection = Connection &
  RecruitConnection & {
    __typename?: 'RootQueryToRecruitConnection'
    /** Edges for the RootQueryToRecruitConnection connection */
    edges: Array<RootQueryToRecruitConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Recruit>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToRecruitConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToRecruitConnectionEdge = Edge &
  RecruitConnectionEdge & {
    __typename?: 'RootQueryToRecruitConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Recruit
  }

/** Page Info on the &quot;RootQueryToRecruitConnection&quot; */
export type RootQueryToRecruitConnectionPageInfo = PageInfo &
  RecruitConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToRecruitConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToRecruitConnection connection */
export type RootQueryToRecruitConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RootQuery type and the recruitList type */
export type RootQueryToRecruitListConnection = Connection &
  RecruitListConnection & {
    __typename?: 'RootQueryToRecruitListConnection'
    /** Edges for the RootQueryToRecruitListConnection connection */
    edges: Array<RootQueryToRecruitListConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<RecruitList>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToRecruitListConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToRecruitListConnectionEdge = Edge &
  RecruitListConnectionEdge & {
    __typename?: 'RootQueryToRecruitListConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: RecruitList
  }

/** Page Info on the &quot;RootQueryToRecruitListConnection&quot; */
export type RootQueryToRecruitListConnectionPageInfo = PageInfo &
  RecruitListConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToRecruitListConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToRecruitListConnection connection */
export type RootQueryToRecruitListConnectionWhereArgs = {
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
  /** Filter by RecruitLists by language code (Polylang) */
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the review type */
export type RootQueryToReviewConnection = Connection &
  ReviewConnection & {
    __typename?: 'RootQueryToReviewConnection'
    /** Edges for the RootQueryToReviewConnection connection */
    edges: Array<RootQueryToReviewConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Review>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToReviewConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToReviewConnectionEdge = Edge &
  ReviewConnectionEdge & {
    __typename?: 'RootQueryToReviewConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Review
  }

/** Page Info on the &quot;RootQueryToReviewConnection&quot; */
export type RootQueryToReviewConnectionPageInfo = PageInfo &
  ReviewConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToReviewConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToReviewConnection connection */
export type RootQueryToReviewConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the RootQuery type and the reviewList type */
export type RootQueryToReviewListConnection = Connection &
  ReviewListConnection & {
    __typename?: 'RootQueryToReviewListConnection'
    /** Edges for the RootQueryToReviewListConnection connection */
    edges: Array<RootQueryToReviewListConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ReviewList>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToReviewListConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToReviewListConnectionEdge = Edge &
  ReviewListConnectionEdge & {
    __typename?: 'RootQueryToReviewListConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ReviewList
  }

/** Page Info on the &quot;RootQueryToReviewListConnection&quot; */
export type RootQueryToReviewListConnectionPageInfo = PageInfo &
  ReviewListConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToReviewListConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToReviewListConnection connection */
export type RootQueryToReviewListConnectionWhereArgs = {
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
  /** Filter by ReviewLists by language code (Polylang) */
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'RootQueryToRevisionsConnection'
    /** Edges for the RootQueryToRevisionsConnection connection */
    edges: Array<RootQueryToRevisionsConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToRevisionsConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToRevisionsConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */
export type RootQueryToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToRevisionsConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToSkillCategoryConnection = Connection &
  SkillCategoryConnection & {
    __typename?: 'RootQueryToSkillCategoryConnection'
    /** Edges for the RootQueryToSkillCategoryConnection connection */
    edges: Array<RootQueryToSkillCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<SkillCategory>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToSkillCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToSkillCategoryConnectionEdge = Edge &
  SkillCategoryConnectionEdge & {
    __typename?: 'RootQueryToSkillCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: SkillCategory
  }

/** Page Info on the &quot;RootQueryToSkillCategoryConnection&quot; */
export type RootQueryToSkillCategoryConnectionPageInfo = PageInfo &
  SkillCategoryConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToSkillCategoryConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Skill type */
export type RootQueryToSkillConnection = Connection &
  SkillConnection & {
    __typename?: 'RootQueryToSkillConnection'
    /** Edges for the RootQueryToSkillConnection connection */
    edges: Array<RootQueryToSkillConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Skill>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToSkillConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToSkillConnectionEdge = Edge &
  SkillConnectionEdge & {
    __typename?: 'RootQueryToSkillConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Skill
  }

/** Page Info on the &quot;RootQueryToSkillConnection&quot; */
export type RootQueryToSkillConnectionPageInfo = PageInfo &
  SkillConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToSkillConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToSkillConnection connection */
export type RootQueryToSkillConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToSocialNetworkConnection = Connection &
  SocialNetworkConnection & {
    __typename?: 'RootQueryToSocialNetworkConnection'
    /** Edges for the RootQueryToSocialNetworkConnection connection */
    edges: Array<RootQueryToSocialNetworkConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<SocialNetwork>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToSocialNetworkConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToSocialNetworkConnectionEdge = Edge &
  SocialNetworkConnectionEdge & {
    __typename?: 'RootQueryToSocialNetworkConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: SocialNetwork
  }

/** Page Info on the &quot;RootQueryToSocialNetworkConnection&quot; */
export type RootQueryToSocialNetworkConnectionPageInfo = PageInfo &
  SocialNetworkConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToSocialNetworkConnectionPageInfo'
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

/** Arguments for filtering the RootQueryToSocialNetworkConnection connection */
export type RootQueryToSocialNetworkConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToTagConnection = Connection &
  TagConnection & {
    __typename?: 'RootQueryToTagConnection'
    /** Edges for the RootQueryToTagConnection connection */
    edges: Array<RootQueryToTagConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Tag>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTagConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge &
  TagConnectionEdge & {
    __typename?: 'RootQueryToTagConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Tag
  }

/** Page Info on the &quot;RootQueryToTagConnection&quot; */
export type RootQueryToTagConnectionPageInfo = PageInfo &
  TagConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToTagConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection &
  TaxonomyConnection & {
    __typename?: 'RootQueryToTaxonomyConnection'
    /** Edges for the RootQueryToTaxonomyConnection connection */
    edges: Array<RootQueryToTaxonomyConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Taxonomy>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTaxonomyConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge &
  TaxonomyConnectionEdge & {
    __typename?: 'RootQueryToTaxonomyConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Taxonomy
  }

/** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */
export type RootQueryToTaxonomyConnectionPageInfo = PageInfo &
  TaxonomyConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToTaxonomyConnectionPageInfo'
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

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'RootQueryToTermNodeConnection'
    /** Edges for the RootQueryToTermNodeConnection connection */
    edges: Array<RootQueryToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'RootQueryToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */
export type RootQueryToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToTermNodeConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection &
  ThemeConnection & {
    __typename?: 'RootQueryToThemeConnection'
    /** Edges for the RootQueryToThemeConnection connection */
    edges: Array<RootQueryToThemeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Theme>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToThemeConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge &
  ThemeConnectionEdge & {
    __typename?: 'RootQueryToThemeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Theme
  }

/** Page Info on the &quot;RootQueryToThemeConnection&quot; */
export type RootQueryToThemeConnectionPageInfo = PageInfo &
  ThemeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToThemeConnectionPageInfo'
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

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection &
  UserConnection & {
    __typename?: 'RootQueryToUserConnection'
    /** Edges for the RootQueryToUserConnection connection */
    edges: Array<RootQueryToUserConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<User>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToUserConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge &
  UserConnectionEdge & {
    __typename?: 'RootQueryToUserConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: User
  }

/** Page Info on the &quot;RootQueryToUserConnection&quot; */
export type RootQueryToUserConnectionPageInfo = PageInfo &
  UserConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToUserConnectionPageInfo'
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
  /** What parameter to use to order the objects by. */
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
export type RootQueryToUserRoleConnection = Connection &
  UserRoleConnection & {
    __typename?: 'RootQueryToUserRoleConnection'
    /** Edges for the RootQueryToUserRoleConnection connection */
    edges: Array<RootQueryToUserRoleConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<UserRole>
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToUserRoleConnectionPageInfo
  }

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge &
  UserRoleConnectionEdge & {
    __typename?: 'RootQueryToUserRoleConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: UserRole
  }

/** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */
export type RootQueryToUserRoleConnectionPageInfo = PageInfo &
  UserRoleConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'RootQueryToUserRoleConnectionPageInfo'
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
  meta?: Maybe<SeoGlobalMeta>
  openGraph?: Maybe<SeoOpenGraph>
  redirects?: Maybe<Array<Maybe<SeoRedirect>>>
  schema?: Maybe<SeoSchema>
  social?: Maybe<SeoSocial>
  webmaster?: Maybe<SeoWebmaster>
}

/** The Yoast SEO search appearance content types fields */
export type SeoContentType = {
  __typename?: 'SEOContentType'
  archive?: Maybe<SeoContentTypeArchive>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['Boolean']['output']>
  schema?: Maybe<SeoPageInfoSchema>
  schemaType?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO search appearance content types fields */
export type SeoContentTypeArchive = {
  __typename?: 'SEOContentTypeArchive'
  archiveLink?: Maybe<Scalars['String']['output']>
  breadcrumbTitle?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  hasArchive?: Maybe<Scalars['Boolean']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsFollow?: Maybe<Scalars['String']['output']>
  metaRobotsIndex?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['Boolean']['output']>
  metaRobotsNoindex?: Maybe<Scalars['Boolean']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO search appearance content types */
export type SeoContentTypes = {
  __typename?: 'SEOContentTypes'
  aboutItem?: Maybe<SeoContentType>
  commonFragment?: Maybe<SeoContentType>
  confidentialityPolicy?: Maybe<SeoContentType>
  contact?: Maybe<SeoContentType>
  contactItem?: Maybe<SeoContentType>
  feedbackItem?: Maybe<SeoContentType>
  footerItem?: Maybe<SeoContentType>
  fragment?: Maybe<SeoContentType>
  heroItem?: Maybe<SeoContentType>
  main?: Maybe<SeoContentType>
  mediaItem?: Maybe<SeoContentType>
  messenger?: Maybe<SeoContentType>
  navigationItem?: Maybe<SeoContentType>
  notFound?: Maybe<SeoContentType>
  page?: Maybe<SeoContentType>
  post?: Maybe<SeoContentType>
  privacyPolicyItem?: Maybe<SeoContentType>
  recruit?: Maybe<SeoContentType>
  review?: Maybe<SeoContentType>
  skill?: Maybe<SeoContentType>
  socialNetwork?: Maybe<SeoContentType>
}

/** The Yoast SEO meta data */
export type SeoGlobalMeta = {
  __typename?: 'SEOGlobalMeta'
  author?: Maybe<SeoGlobalMetaAuthor>
  config?: Maybe<SeoGlobalMetaConfig>
  date?: Maybe<SeoGlobalMetaDate>
  homepage?: Maybe<SeoGlobalMetaHome>
  notFound?: Maybe<SeoGlobalMeta404>
}

/** The Yoast SEO meta 404 data */
export type SeoGlobalMeta404 = {
  __typename?: 'SEOGlobalMeta404'
  breadcrumb?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO Author data */
export type SeoGlobalMetaAuthor = {
  __typename?: 'SEOGlobalMetaAuthor'
  description?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO meta config data */
export type SeoGlobalMetaConfig = {
  __typename?: 'SEOGlobalMetaConfig'
  separator?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO Date data */
export type SeoGlobalMetaDate = {
  __typename?: 'SEOGlobalMetaDate'
  description?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** The Yoast SEO homepage data */
export type SeoGlobalMetaHome = {
  __typename?: 'SEOGlobalMetaHome'
  description?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
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
  homeUrl?: Maybe<Scalars['String']['output']>
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
  otherSocials?: Maybe<Array<Maybe<Scalars['String']['output']>>>
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
  breadcrumbTitle?: Maybe<Scalars['String']['output']>
  canonical?: Maybe<Scalars['String']['output']>
  fullHead?: Maybe<Scalars['String']['output']>
  language?: Maybe<Scalars['String']['output']>
  metaDesc?: Maybe<Scalars['String']['output']>
  metaRobotsNofollow?: Maybe<Scalars['String']['output']>
  metaRobotsNoindex?: Maybe<Scalars['String']['output']>
  opengraphDescription?: Maybe<Scalars['String']['output']>
  opengraphImage?: Maybe<MediaItem>
  opengraphTitle?: Maybe<Scalars['String']['output']>
  region?: Maybe<Scalars['String']['output']>
  schema?: Maybe<SeoUserSchema>
  social?: Maybe<SeoUserSocial>
  title?: Maybe<Scalars['String']['output']>
  twitterDescription?: Maybe<Scalars['String']['output']>
  twitterImage?: Maybe<MediaItem>
  twitterTitle?: Maybe<Scalars['String']['output']>
}

/** The Schema types for User */
export type SeoUserSchema = {
  __typename?: 'SEOUserSchema'
  articleType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  pageType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
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

/** The strategy to use when loading the script */
export enum ScriptLoadingStrategyEnum {
  /** Use the script `async` attribute */
  Async = 'ASYNC',
  /** Use the script `defer` attribute */
  Defer = 'DEFER',
}

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A string that contains the user's username or email address. */
  username: Scalars['String']['input']
}

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
  success?: Maybe<Scalars['Boolean']['output']>
  /**
   * The user that the password reset email was sent to
   * @deprecated This field will be removed in a future version of WPGraphQL
   */
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
  readingSettingsPageForPosts?: Maybe<Scalars['Int']['output']>
  /** Settings of the the integer Settings Group */
  readingSettingsPageOnFront?: Maybe<Scalars['Int']['output']>
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']['output']>
  /** Settings of the the string Settings Group */
  readingSettingsShowOnFront?: Maybe<Scalars['String']['output']>
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']['output']>
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']['output']>
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']['output']>
}

/** The Skill type */
export type Skill = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  HierarchicalNode &
  MenuItemLinkable &
  Node &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithPageAttributes &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
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
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the skill object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the skill object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the skill object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the Skill type and the Skill type */
    preview?: Maybe<SkillToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
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

/** The &quot;SkillAddons&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type SkillAddons = AcfFieldGroup &
  AcfFieldGroupFields &
  SkillAddons_Fields & {
    __typename?: 'SkillAddons'
    /**
     * The name of the field group
     * @deprecated Use __typename instead
     */
    fieldGroupName?: Maybe<Scalars['String']['output']>
    /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;SkillAddons&quot; Field Group */
    icon?: Maybe<AcfMediaItemConnectionEdge>
  }

/** Interface representing fields of the ACF &quot;SkillAddons&quot; Field Group */
export type SkillAddons_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName?: Maybe<Scalars['String']['output']>
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;SkillAddons&quot; Field Group */
  icon?: Maybe<AcfMediaItemConnectionEdge>
}

/** The SkillCategory type */
export type SkillCategory = DatabaseIdentifier &
  HierarchicalNode &
  HierarchicalTermNode &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable &
  WithAcfSkillAddons & {
    __typename?: 'SkillCategory'
    /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<SkillCategoryToAncestorsSkillCategoryConnection>
    /** Connection between the SkillCategory type and its children SkillCategories. */
    children?: Maybe<SkillCategoryToSkillCategoryConnection>
    /** Connection between the SkillCategory type and the ContentNode type */
    contentNodes?: Maybe<SkillCategoryToContentNodeConnection>
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
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** Connection between the SkillCategory type and its parent SkillCategory. */
    parent?: Maybe<SkillCategoryToParentSkillCategoryConnectionEdge>
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']['output']>
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the Списки скиллов taxonomy. */
    seo?: Maybe<TaxonomySeo>
    /** Fields of the SkillAddons ACF Field Group */
    skillAddons?: Maybe<SkillAddons>
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
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
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

/** Connection to SkillCategory Nodes */
export type SkillCategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected SkillCategory Nodes */
  edges: Array<SkillCategoryConnectionEdge>
  /** A list of connected SkillCategory Nodes */
  nodes: Array<SkillCategory>
  /** Information about pagination in a connection. */
  pageInfo: SkillCategoryConnectionPageInfo
}

/** Edge between a Node and a connected SkillCategory */
export type SkillCategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected SkillCategory Node */
  node: SkillCategory
}

/** Page Info on the connected SkillCategoryConnectionEdge */
export type SkillCategoryConnectionPageInfo = {
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
export type SkillCategoryToAncestorsSkillCategoryConnection = Connection &
  SkillCategoryConnection & {
    __typename?: 'SkillCategoryToAncestorsSkillCategoryConnection'
    /** Edges for the SkillCategoryToAncestorsSkillCategoryConnection connection */
    edges: Array<SkillCategoryToAncestorsSkillCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<SkillCategory>
    /** Information about pagination in a connection. */
    pageInfo: SkillCategoryToAncestorsSkillCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type SkillCategoryToAncestorsSkillCategoryConnectionEdge = Edge &
  SkillCategoryConnectionEdge & {
    __typename?: 'SkillCategoryToAncestorsSkillCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: SkillCategory
  }

/** Page Info on the &quot;SkillCategoryToAncestorsSkillCategoryConnection&quot; */
export type SkillCategoryToAncestorsSkillCategoryConnectionPageInfo = PageInfo &
  SkillCategoryConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'SkillCategoryToAncestorsSkillCategoryConnectionPageInfo'
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

/** Connection between the SkillCategory type and the ContentNode type */
export type SkillCategoryToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'SkillCategoryToContentNodeConnection'
    /** Edges for the SkillCategoryToContentNodeConnection connection */
    edges: Array<SkillCategoryToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: SkillCategoryToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type SkillCategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'SkillCategoryToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;SkillCategoryToContentNodeConnection&quot; */
export type SkillCategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'SkillCategoryToContentNodeConnectionPageInfo'
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

/** Arguments for filtering the SkillCategoryToContentNodeConnection connection */
export type SkillCategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfSkillCategoryEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type SkillCategoryToParentSkillCategoryConnectionEdge = Edge &
  OneToOneConnection &
  SkillCategoryConnectionEdge & {
    __typename?: 'SkillCategoryToParentSkillCategoryConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: SkillCategory
  }

/** Connection between the SkillCategory type and the SkillCategory type */
export type SkillCategoryToSkillCategoryConnection = Connection &
  SkillCategoryConnection & {
    __typename?: 'SkillCategoryToSkillCategoryConnection'
    /** Edges for the SkillCategoryToSkillCategoryConnection connection */
    edges: Array<SkillCategoryToSkillCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<SkillCategory>
    /** Information about pagination in a connection. */
    pageInfo: SkillCategoryToSkillCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type SkillCategoryToSkillCategoryConnectionEdge = Edge &
  SkillCategoryConnectionEdge & {
    __typename?: 'SkillCategoryToSkillCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: SkillCategory
  }

/** Page Info on the &quot;SkillCategoryToSkillCategoryConnection&quot; */
export type SkillCategoryToSkillCategoryConnectionPageInfo = PageInfo &
  SkillCategoryConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'SkillCategoryToSkillCategoryConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the SkillCategory type and the Skill type */
export type SkillCategoryToSkillConnection = Connection &
  SkillConnection & {
    __typename?: 'SkillCategoryToSkillConnection'
    /** Edges for the SkillCategoryToSkillConnection connection */
    edges: Array<SkillCategoryToSkillConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Skill>
    /** Information about pagination in a connection. */
    pageInfo: SkillCategoryToSkillConnectionPageInfo
  }

/** An edge in a connection */
export type SkillCategoryToSkillConnectionEdge = Edge &
  SkillConnectionEdge & {
    __typename?: 'SkillCategoryToSkillConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Skill
  }

/** Page Info on the &quot;SkillCategoryToSkillConnection&quot; */
export type SkillCategoryToSkillConnectionPageInfo = PageInfo &
  SkillConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'SkillCategoryToSkillConnectionPageInfo'
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

/** Arguments for filtering the SkillCategoryToSkillConnection connection */
export type SkillCategoryToSkillConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type SkillCategoryToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'SkillCategoryToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
  }

/** Connection to Skill Nodes */
export type SkillConnection = {
  /** A list of edges (relational context) between RootQuery and connected Skill Nodes */
  edges: Array<SkillConnectionEdge>
  /** A list of connected Skill Nodes */
  nodes: Array<Skill>
  /** Information about pagination in a connection. */
  pageInfo: SkillConnectionPageInfo
}

/** Edge between a Node and a connected Skill */
export type SkillConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Skill Node */
  node: Skill
}

/** Page Info on the connected SkillConnectionEdge */
export type SkillConnectionPageInfo = {
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

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum SkillIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
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

/** Connection between the Skill type and the Skill type */
export type SkillToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  SkillConnectionEdge & {
    __typename?: 'SkillToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Skill
  }

/** Connection between the Skill type and the SkillCategory type */
export type SkillToSkillCategoryConnection = Connection &
  SkillCategoryConnection & {
    __typename?: 'SkillToSkillCategoryConnection'
    /** Edges for the SkillToSkillCategoryConnection connection */
    edges: Array<SkillToSkillCategoryConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<SkillCategory>
    /** Information about pagination in a connection. */
    pageInfo: SkillToSkillCategoryConnectionPageInfo
  }

/** An edge in a connection */
export type SkillToSkillCategoryConnectionEdge = Edge &
  SkillCategoryConnectionEdge & {
    __typename?: 'SkillToSkillCategoryConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The Yoast SEO Primary skill_list */
    isPrimary?: Maybe<Scalars['Boolean']['output']>
    /** The item at the end of the edge */
    node: SkillCategory
  }

/** Page Info on the &quot;SkillToSkillCategoryConnection&quot; */
export type SkillToSkillCategoryConnectionPageInfo = PageInfo &
  SkillCategoryConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'SkillToSkillCategoryConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>
}

/** Connection between the Skill type and the TermNode type */
export type SkillToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'SkillToTermNodeConnection'
    /** Edges for the SkillToTermNodeConnection connection */
    edges: Array<SkillToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: SkillToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type SkillToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'SkillToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;SkillToTermNodeConnection&quot; */
export type SkillToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'SkillToTermNodeConnectionPageInfo'
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
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
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
  Previewable &
  UniformResourceIdentifiable &
  WithAcfContentAddons & {
    __typename?: 'SocialNetwork'
    /** The content of the post. */
    content?: Maybe<Scalars['String']['output']>
    /** Fields of the ContentAddons ACF Field Group */
    contentAddons?: Maybe<ContentAddons>
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']['output']
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
    /** Whether the social_networks object is password protected. */
    hasPassword?: Maybe<Scalars['Boolean']['output']>
    /** The globally unique identifier of the social_networks object. */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** The password for the social_networks object. */
    password?: Maybe<Scalars['String']['output']>
    /** Connection between the SocialNetwork type and the SocialNetwork type */
    preview?: Maybe<SocialNetworkToPreviewConnectionEdge>
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']['output']>
    /** The Yoast SEO data of the ContentNode */
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
    /** The template assigned to the node */
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

/** Connection to SocialNetwork Nodes */
export type SocialNetworkConnection = {
  /** A list of edges (relational context) between RootQuery and connected SocialNetwork Nodes */
  edges: Array<SocialNetworkConnectionEdge>
  /** A list of connected SocialNetwork Nodes */
  nodes: Array<SocialNetwork>
  /** Information about pagination in a connection. */
  pageInfo: SocialNetworkConnectionPageInfo
}

/** Edge between a Node and a connected SocialNetwork */
export type SocialNetworkConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected SocialNetwork Node */
  node: SocialNetwork
}

/** Page Info on the connected SocialNetworkConnectionEdge */
export type SocialNetworkConnectionPageInfo = {
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
export type SocialNetworkToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  SocialNetworkConnectionEdge & {
    __typename?: 'SocialNetworkToPreviewConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: SocialNetwork
  }

/** Input for the submitForm mutation. */
export type SubmitFormInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Submited form data */
  data?: InputMaybe<Array<InputMaybe<InputField>>>
  /** Submited form Id */
  formId?: InputMaybe<Scalars['Int']['input']>
}

/** The payload for the submitForm mutation. */
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
    /** Connection between the Tag type and the ContentNode type */
    contentNodes?: Maybe<TagToContentNodeConnection>
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
    /** The globally unique ID for the object */
    id: Scalars['ID']['output']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** Connection between the Tag type and the post type */
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
    /** Connection between the Tag type and the Taxonomy type */
    taxonomy?: Maybe<TagToTaxonomyConnectionEdge>
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']['output']>
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

/** Connection to tag Nodes */
export type TagConnection = {
  /** A list of edges (relational context) between RootQuery and connected tag Nodes */
  edges: Array<TagConnectionEdge>
  /** A list of connected tag Nodes */
  nodes: Array<Tag>
  /** Information about pagination in a connection. */
  pageInfo: TagConnectionPageInfo
}

/** Edge between a Node and a connected tag */
export type TagConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected tag Node */
  node: Tag
}

/** Page Info on the connected TagConnectionEdge */
export type TagConnectionPageInfo = {
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

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'TagToContentNodeConnection'
    /** Edges for the TagToContentNodeConnection connection */
    edges: Array<TagToContentNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: TagToContentNodeConnectionPageInfo
  }

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'TagToContentNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export type TagToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'TagToContentNodeConnectionPageInfo'
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

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection &
  PostConnection & {
    __typename?: 'TagToPostConnection'
    /** Edges for the TagToPostConnection connection */
    edges: Array<TagToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: TagToPostConnectionPageInfo
  }

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'TagToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;TagToPostConnection&quot; */
export type TagToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'TagToPostConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'TagToTaxonomyConnectionEdge'
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']['output']>
    /** The node of the connection, without the edges */
    node: Taxonomy
  }

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy'
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>
  /** List of Term Nodes associated with the Taxonomy */
  connectedTerms?: Maybe<TaxonomyToTermNodeConnection>
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
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
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

/** A taxonomy object */
export type TaxonomyConnectedTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection to Taxonomy Nodes */
export type TaxonomyConnection = {
  /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
  edges: Array<TaxonomyConnectionEdge>
  /** A list of connected Taxonomy Nodes */
  nodes: Array<Taxonomy>
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyConnectionPageInfo
}

/** Edge between a Node and a connected Taxonomy */
export type TaxonomyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Taxonomy Node */
  node: Taxonomy
}

/** Page Info on the connected TaxonomyConnectionEdge */
export type TaxonomyConnectionPageInfo = {
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

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum recruit_list */
  Recruitlist = 'RECRUITLIST',
  /** Taxonomy enum review_list */
  Reviewlist = 'REVIEWLIST',
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
export type TaxonomyToContentTypeConnection = Connection &
  ContentTypeConnection & {
    __typename?: 'TaxonomyToContentTypeConnection'
    /** Edges for the TaxonomyToContentTypeConnection connection */
    edges: Array<TaxonomyToContentTypeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentType>
    /** Information about pagination in a connection. */
    pageInfo: TaxonomyToContentTypeConnectionPageInfo
  }

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge & {
    __typename?: 'TaxonomyToContentTypeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentType
  }

/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export type TaxonomyToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'TaxonomyToContentTypeConnectionPageInfo'
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

/** Connection between the Taxonomy type and the TermNode type */
export type TaxonomyToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'TaxonomyToTermNodeConnection'
    /** Edges for the TaxonomyToTermNodeConnection connection */
    edges: Array<TaxonomyToTermNodeConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>
    /** Information about pagination in a connection. */
    pageInfo: TaxonomyToTermNodeConnectionPageInfo
  }

/** An edge in a connection */
export type TaxonomyToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'TaxonomyToTermNodeConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: TermNode
  }

/** Page Info on the &quot;TaxonomyToTermNodeConnection&quot; */
export type TaxonomyToTermNodeConnectionPageInfo = PageInfo &
  TermNodeConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'TaxonomyToTermNodeConnectionPageInfo'
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
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output']
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output']
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
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>
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

/** Connection to TermNode Nodes */
export type TermNodeConnection = {
  /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
  edges: Array<TermNodeConnectionEdge>
  /** A list of connected TermNode Nodes */
  nodes: Array<TermNode>
  /** Information about pagination in a connection. */
  pageInfo: TermNodeConnectionPageInfo
}

/** Edge between a Node and a connected TermNode */
export type TermNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected TermNode Node */
  node: TermNode
}

/** Page Info on the connected TermNodeConnectionEdge */
export type TermNodeConnectionPageInfo = {
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
export type TermNodeToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'TermNodeToEnqueuedScriptConnection'
    /** Edges for the TermNodeToEnqueuedScriptConnection connection */
    edges: Array<TermNodeToEnqueuedScriptConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>
    /** Information about pagination in a connection. */
    pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo
  }

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'TermNodeToEnqueuedScriptConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedScript
  }

/** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */
export type TermNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'TermNodeToEnqueuedScriptConnectionPageInfo'
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

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'TermNodeToEnqueuedStylesheetConnection'
    /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
    edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>
    /** Information about pagination in a connection. */
    pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo
  }

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
  }

/** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */
export type TermNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'TermNodeToEnqueuedStylesheetConnectionPageInfo'
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

/** Connection to Theme Nodes */
export type ThemeConnection = {
  /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
  edges: Array<ThemeConnectionEdge>
  /** A list of connected Theme Nodes */
  nodes: Array<Theme>
  /** Information about pagination in a connection. */
  pageInfo: ThemeConnectionPageInfo
}

/** Edge between a Node and a connected Theme */
export type ThemeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected Theme Node */
  node: Theme
}

/** Page Info on the connected ThemeConnectionEdge */
export type ThemeConnectionPageInfo = {
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

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output']
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output']
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output']
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output']
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output']
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output']
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>
}

/** Input for the updateAboutItem mutation. */
export type UpdateAboutItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the AboutItem object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateAboutItem mutation. */
export type UpdateAboutItemPayload = {
  __typename?: 'UpdateAboutItemPayload'
  /** The Post object mutation type. */
  aboutItem?: Maybe<AboutItem>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the updateCategory mutation. */
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

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload'
  /** The created category */
  category?: Maybe<Category>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Input for the updateComment mutation. */
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
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']['input']>
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the comment being updated. */
  id: Scalars['ID']['input']
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']['input']>
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The comment that was created */
  comment?: Maybe<Comment>
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']['output']>
}

/** Input for the updateCommonFragment mutation. */
export type UpdateCommonFragmentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the CommonFragment object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateCommonFragment mutation. */
export type UpdateCommonFragmentPayload = {
  __typename?: 'UpdateCommonFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  commonFragment?: Maybe<CommonFragment>
}

/** Input for the updateConfidentialityPolicy mutation. */
export type UpdateConfidentialityPolicyInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the confidentialityPolicy object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateConfidentialityPolicy mutation. */
export type UpdateConfidentialityPolicyPayload = {
  __typename?: 'UpdateConfidentialityPolicyPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  confidentialityPolicy?: Maybe<ConfidentialityPolicy>
}

/** Input for the updateContact mutation. */
export type UpdateContactInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Contact object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** Input for the updateContactItem mutation. */
export type UpdateContactItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the ContactItem object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateContactItem mutation. */
export type UpdateContactItemPayload = {
  __typename?: 'UpdateContactItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  contactItem?: Maybe<ContactItem>
}

/** The payload for the updateContact mutation. */
export type UpdateContactPayload = {
  __typename?: 'UpdateContactPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  contact?: Maybe<Contact>
}

/** Input for the updateFeedbackItem mutation. */
export type UpdateFeedbackItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the FeedbackItem object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateFeedbackItem mutation. */
export type UpdateFeedbackItemPayload = {
  __typename?: 'UpdateFeedbackItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  feedbackItem?: Maybe<FeedbackItem>
}

/** Input for the updateFooterItem mutation. */
export type UpdateFooterItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the FooterItem object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateFooterItem mutation. */
export type UpdateFooterItemPayload = {
  __typename?: 'UpdateFooterItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  footerItem?: Maybe<FooterItem>
}

/** Input for the updateFragment mutation. */
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
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateFragment mutation. */
export type UpdateFragmentPayload = {
  __typename?: 'UpdateFragmentPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  fragment?: Maybe<Fragment>
}

/** Input for the updateHeroItem mutation. */
export type UpdateHeroItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the HeroItem object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateHeroItem mutation. */
export type UpdateHeroItemPayload = {
  __typename?: 'UpdateHeroItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  heroItem?: Maybe<HeroItem>
}

/** Input for the updateMain mutation. */
export type UpdateMainInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Main object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateMain mutation. */
export type UpdateMainPayload = {
  __typename?: 'UpdateMainPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  main?: Maybe<Main>
}

/** Input for the updateMediaItem mutation. */
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
  /** The ID of the parent object */
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

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the updateMessenger mutation. */
export type UpdateMessengerInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Messenger object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateMessenger mutation. */
export type UpdateMessengerPayload = {
  __typename?: 'UpdateMessengerPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  messenger?: Maybe<Messenger>
}

/** Input for the updateNavigationItem mutation. */
export type UpdateNavigationItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the NavigationItem object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateNavigationItem mutation. */
export type UpdateNavigationItemPayload = {
  __typename?: 'UpdateNavigationItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the updateNotFound mutation. */
export type UpdateNotFoundInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the NotFound object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateNotFound mutation. */
export type UpdateNotFoundPayload = {
  __typename?: 'UpdateNotFoundPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  notFound?: Maybe<NotFound>
}

/** Input for the updatePage mutation. */
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
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  page?: Maybe<Page>
}

/** Input for the updatePostFormat mutation. */
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

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_format */
  postFormat?: Maybe<PostFormat>
}

/** Input for the updatePost mutation. */
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
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  post?: Maybe<Post>
}

/** Input for the updatePrivacyPolicyItem mutation. */
export type UpdatePrivacyPolicyItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the PrivacyPolicyItem object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updatePrivacyPolicyItem mutation. */
export type UpdatePrivacyPolicyItemPayload = {
  __typename?: 'UpdatePrivacyPolicyItemPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  privacyPolicyItem?: Maybe<PrivacyPolicyItem>
}

/** Input for the updateRecruit mutation. */
export type UpdateRecruitInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Recruit object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** Set connections between the Recruit and recruitLists */
  recruitLists?: InputMaybe<RecruitRecruitListsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Input for the updateRecruitList mutation. */
export type UpdateRecruitListInput = {
  /** The slug that the recruit_list will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the recruit_list object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the recruitList object to update */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the recruit_list object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateRecruitList mutation. */
export type UpdateRecruitListPayload = {
  __typename?: 'UpdateRecruitListPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created recruit_list */
  recruitList?: Maybe<RecruitList>
}

/** The payload for the updateRecruit mutation. */
export type UpdateRecruitPayload = {
  __typename?: 'UpdateRecruitPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  recruit?: Maybe<Recruit>
}

/** Input for the updateReview mutation. */
export type UpdateReviewInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the review object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** Set connections between the review and reviewLists */
  reviewLists?: InputMaybe<ReviewReviewListsInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Input for the updateReviewList mutation. */
export type UpdateReviewListInput = {
  /** The slug that the review_list will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The description of the review_list object */
  description?: InputMaybe<Scalars['String']['input']>
  /** The ID of the reviewList object to update */
  id: Scalars['ID']['input']
  language?: InputMaybe<LanguageCodeEnum>
  /** The name of the review_list object to mutate */
  name?: InputMaybe<Scalars['String']['input']>
  /** The ID of the review_list that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateReviewList mutation. */
export type UpdateReviewListPayload = {
  __typename?: 'UpdateReviewListPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created review_list */
  reviewList?: Maybe<ReviewList>
}

/** The payload for the updateReview mutation. */
export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  review?: Maybe<Review>
}

/** Input for the updateSettings mutation. */
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
  /** ID страницы, на которой должны отображаться последние записи */
  readingSettingsPageForPosts?: InputMaybe<Scalars['Int']['input']>
  /** ID страницы, которая должна отображаться на главной странице */
  readingSettingsPageOnFront?: InputMaybe<Scalars['Int']['input']>
  /** Максимум страниц блога для показа. */
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']['input']>
  /** Что показать на главной странице */
  readingSettingsShowOnFront?: InputMaybe<Scalars['String']['input']>
  /** Рубрика для записей по умолчанию. */
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']['input']>
  /** Формат записей по умолчанию. */
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']['input']>
  /** Преобразовывать смайлики наподобие :-) и :-P в картинки при показе. */
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']['input']>
}

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload'
  /** Update all settings. */
  allSettings?: Maybe<Settings>
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Update the DiscussionSettings setting. */
  discussionSettings?: Maybe<DiscussionSettings>
  /** Update the GeneralSettings setting. */
  generalSettings?: Maybe<GeneralSettings>
  /** Update the ReadingSettings setting. */
  readingSettings?: Maybe<ReadingSettings>
  /** Update the WritingSettings setting. */
  writingSettings?: Maybe<WritingSettings>
}

/** Input for the updateSkillCategory mutation. */
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

/** The payload for the updateSkillCategory mutation. */
export type UpdateSkillCategoryPayload = {
  __typename?: 'UpdateSkillCategoryPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created skill_list */
  skillCategory?: Maybe<SkillCategory>
}

/** Input for the updateSkill mutation. */
export type UpdateSkillInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the Skill object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
  language?: InputMaybe<LanguageCodeEnum>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>
  /** Set connections between the Skill and SkillCategories */
  skillCategories?: InputMaybe<SkillSkillCategoriesInput>
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** The payload for the updateSkill mutation. */
export type UpdateSkillPayload = {
  __typename?: 'UpdateSkillPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  skill?: Maybe<Skill>
}

/** Input for the updateSocialNetwork mutation. */
export type UpdateSocialNetworkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>
  /** The ID of the SocialNetwork object */
  id: Scalars['ID']['input']
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>
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

/** The payload for the updateSocialNetwork mutation. */
export type UpdateSocialNetworkPayload = {
  __typename?: 'UpdateSocialNetworkPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The Post object mutation type. */
  socialNetwork?: Maybe<SocialNetwork>
}

/** Input for the updateTag mutation. */
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

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload'
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The created post_tag */
  tag?: Maybe<Tag>
}

/** Input for the updateUser mutation. */
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

/** The payload for the updateUser mutation. */
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
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']['output']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']['output']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']['output']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']['output']
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
    /** Display name of the user. This is equivalent to the WP_User-&gt;display_name property. */
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
    revisions?: Maybe<UserToRevisionsConnection>
    /** Connection between the User type and the UserRole type */
    roles?: Maybe<UserToUserRoleConnection>
    /** The Yoast SEO data of a user */
    seo?: Maybe<SeoUser>
    /** Whether the Toolbar should be displayed when the user is viewing the site. */
    shouldShowAdminToolbar?: Maybe<Scalars['Boolean']['output']>
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
  where?: InputMaybe<UserToRevisionsConnectionWhereArgs>
}

/** A User object */
export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

/** Connection to User Nodes */
export type UserConnection = {
  /** A list of edges (relational context) between RootQuery and connected User Nodes */
  edges: Array<UserConnectionEdge>
  /** A list of connected User Nodes */
  nodes: Array<User>
  /** Information about pagination in a connection. */
  pageInfo: UserConnectionPageInfo
}

/** Edge between a Node and a connected User */
export type UserConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected User Node */
  node: User
}

/** Page Info on the connected UserConnectionEdge */
export type UserConnectionPageInfo = {
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

/** Connection to UserRole Nodes */
export type UserRoleConnection = {
  /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
  edges: Array<UserRoleConnectionEdge>
  /** A list of connected UserRole Nodes */
  nodes: Array<UserRole>
  /** Information about pagination in a connection. */
  pageInfo: UserRoleConnectionPageInfo
}

/** Edge between a Node and a connected UserRole */
export type UserRoleConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']['output']>
  /** The connected UserRole Node */
  node: UserRole
}

/** Page Info on the connected UserRoleConnectionEdge */
export type UserRoleConnectionPageInfo = {
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
export type UserToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'UserToCommentConnection'
    /** Edges for the UserToCommentConnection connection */
    edges: Array<UserToCommentConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>
    /** Information about pagination in a connection. */
    pageInfo: UserToCommentConnectionPageInfo
  }

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'UserToCommentConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Comment
  }

/** Page Info on the &quot;UserToCommentConnection&quot; */
export type UserToCommentConnectionPageInfo = CommentConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToCommentConnectionPageInfo'
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
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
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

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'UserToEnqueuedScriptConnection'
    /** Edges for the UserToEnqueuedScriptConnection connection */
    edges: Array<UserToEnqueuedScriptConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>
    /** Information about pagination in a connection. */
    pageInfo: UserToEnqueuedScriptConnectionPageInfo
  }

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'UserToEnqueuedScriptConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedScript
  }

/** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */
export type UserToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToEnqueuedScriptConnectionPageInfo'
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

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'UserToEnqueuedStylesheetConnection'
    /** Edges for the UserToEnqueuedStylesheetConnection connection */
    edges: Array<UserToEnqueuedStylesheetConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>
    /** Information about pagination in a connection. */
    pageInfo: UserToEnqueuedStylesheetConnectionPageInfo
  }

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'UserToEnqueuedStylesheetConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
  }

/** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */
export type UserToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToEnqueuedStylesheetConnectionPageInfo'
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

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection &
  MediaItemConnection & {
    __typename?: 'UserToMediaItemConnection'
    /** Edges for the UserToMediaItemConnection connection */
    edges: Array<UserToMediaItemConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>
    /** Information about pagination in a connection. */
    pageInfo: UserToMediaItemConnectionPageInfo
  }

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'UserToMediaItemConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: MediaItem
  }

/** Page Info on the &quot;UserToMediaItemConnection&quot; */
export type UserToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToMediaItemConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type UserToPageConnection = Connection &
  PageConnection & {
    __typename?: 'UserToPageConnection'
    /** Edges for the UserToPageConnection connection */
    edges: Array<UserToPageConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>
    /** Information about pagination in a connection. */
    pageInfo: UserToPageConnectionPageInfo
  }

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'UserToPageConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Page
  }

/** Page Info on the &quot;UserToPageConnection&quot; */
export type UserToPageConnectionPageInfo = PageConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToPageConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
export type UserToPostConnection = Connection &
  PostConnection & {
    __typename?: 'UserToPostConnection'
    /** Edges for the UserToPostConnection connection */
    edges: Array<UserToPostConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>
    /** Information about pagination in a connection. */
    pageInfo: UserToPostConnectionPageInfo
  }

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'UserToPostConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: Post
  }

/** Page Info on the &quot;UserToPostConnection&quot; */
export type UserToPostConnectionPageInfo = PageInfo &
  PostConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'UserToPostConnectionPageInfo'
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
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>
}

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'UserToRevisionsConnection'
    /** Edges for the UserToRevisionsConnection connection */
    edges: Array<UserToRevisionsConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>
    /** Information about pagination in a connection. */
    pageInfo: UserToRevisionsConnectionPageInfo
  }

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'UserToRevisionsConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: ContentNode
  }

/** Page Info on the &quot;UserToRevisionsConnection&quot; */
export type UserToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo &
  PageInfo &
  WpPageInfo & {
    __typename?: 'UserToRevisionsConnectionPageInfo'
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

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>
  /** Specific database ID of the object */
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
  /** What parameter to use to order the objects by. */
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

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection &
  UserRoleConnection & {
    __typename?: 'UserToUserRoleConnection'
    /** Edges for the UserToUserRoleConnection connection */
    edges: Array<UserToUserRoleConnectionEdge>
    /** The nodes of the connection, without the edges */
    nodes: Array<UserRole>
    /** Information about pagination in a connection. */
    pageInfo: UserToUserRoleConnectionPageInfo
  }

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge &
  UserRoleConnectionEdge & {
    __typename?: 'UserToUserRoleConnectionEdge'
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']['output']>
    /** The item at the end of the edge */
    node: UserRole
  }

/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export type UserToUserRoleConnectionPageInfo = PageInfo &
  UserRoleConnectionPageInfo &
  WpPageInfo & {
    __typename?: 'UserToUserRoleConnectionPageInfo'
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
  /** The URL of the user's website. */
  Url = 'URL',
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
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

/** Provides access to fields of the &quot;ContentAddons&quot; ACF Field Group via the &quot;contentAddons&quot; field */
export type WithAcfContentAddons = {
  /** Fields of the ContentAddons ACF Field Group */
  contentAddons?: Maybe<ContentAddons>
}

/** Provides access to fields of the &quot;CustomerReview&quot; ACF Field Group via the &quot;customerReview&quot; field */
export type WithAcfCustomerReview = {
  /** Fields of the CustomerReview ACF Field Group */
  customerReview?: Maybe<CustomerReview>
}

/** Provides access to fields of the &quot;Fragments&quot; ACF Field Group via the &quot;fragments&quot; field */
export type WithAcfFragments = {
  /** Fields of the Fragments ACF Field Group */
  fragments?: Maybe<Fragments>
}

/** Provides access to fields of the &quot;Records&quot; ACF Field Group via the &quot;records&quot; field */
export type WithAcfRecords = {
  /** Fields of the Records ACF Field Group */
  records?: Maybe<Records>
}

/** Provides access to fields of the &quot;Reviews&quot; ACF Field Group via the &quot;reviews&quot; field */
export type WithAcfReviews = {
  /** Fields of the Reviews ACF Field Group */
  reviews?: Maybe<Reviews>
}

/** Provides access to fields of the &quot;SkillAddons&quot; ACF Field Group via the &quot;skillAddons&quot; field */
export type WithAcfSkillAddons = {
  /** Fields of the SkillAddons ACF Field Group */
  skillAddons?: Maybe<SkillAddons>
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
