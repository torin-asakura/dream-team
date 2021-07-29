<?php
/**
 * Template part for displaying pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy
 */

namespace YOOtheme;

?>

<article id="post-<?php the_ID() ?>" <?php post_class('uk-article') ?> typeof="Article">

    <meta property="name" content="<?= esc_html(get_the_title()) ?>">
    <meta property="author" typeof="Person" content="<?= esc_html(get_the_author()) ?>">
    <meta property="dateModified" content="<?= get_the_modified_date('c') ?>">
    <meta class="uk-margin-remove-adjacent" property="datePublished" content="<?= get_the_date('c') ?>">

    <?php if ($thumbnail = get_the_post_thumbnail('', 'post-thumbnail', ['property' => 'url'])) : ?>
    <div class="uk-margin-large-bottom" property="image" typeof="ImageObject">
        <?= $thumbnail ?>
    </div>
    <?php endif ?>

    <?php the_title('<h1 class="uk-article-title">', '</h1>') ?>

    <div class="uk-margin-medium" property="text"><?php the_content('') ?></div>

    <?php wp_link_pages(['before' => '<div class="uk-margin-medium">' . __('Pages:') . '<ul class="uk-pagination">', 'after'  => '</ul></div>']) ?>

    <?php if ($edit = get_edit_post_link()) : ?>
    <p>
        <a href="<?= esc_url($edit) ?>"><?= sprintf(__('%1$s Edit', 'yootheme'), '<span uk-icon="pencil"></span>') ?></a>
    </p>
    <?php endif ?>

</article>
