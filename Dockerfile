# Dockerfile
FROM php:7.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git zip unzip curl libpng-dev libjpeg-dev libonig-dev libxml2-dev \
    libzip-dev libmcrypt-dev libicu-dev libxslt1-dev libpq-dev \
    libfreetype6-dev libjpeg62-turbo-dev libjpeg-dev libpng-dev \
    libmagickwand-dev libmagickcore-dev libxml2-dev mariadb-client \
    && docker-php-ext-install pdo pdo_mysql mysqli zip mbstring intl xml opcache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy source code
COPY . /var/www/html

# Après COPY source code
COPY apache.conf /etc/apache2/sites-available/000-default.conf

RUN a2dissite 000-default.conf \
    && a2ensite 000-default.conf \
    && a2enmod rewrite


# Set permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port
EXPOSE 80

